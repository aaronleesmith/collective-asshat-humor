import React, { useState, useEffect } from 'react';
import { GamePhases } from '../server/model/GamePhases';
import { Player } from '../server/model/Player';
import { Client,  Room } from "colyseus.js";
import GameState from '../server/model/GameState';
import { isEqual } from 'lodash';
import { setName, startGame, drawCards, flipBlackCard, finishedReadingBlackCard, signalReadyToTakeTurn, submitWhiteCards } from '../game-api';
import Submission from '../server/model/Submission';
import { createRoom as gcCreateRoom, joinRoomById as gcJoinRoomById } from '../gameClient';

export interface FrontendGameState {
  phase: GamePhases;
  players: {[key: string]: Player},
  me?: Player;
  activeBlackCard?: number;
  activePlayerTurn?: string;
  roomId?: string;
  submittedWhiteCards: Submission[],

  // Actions the user can take:
  setName: (name: string) => void;
  startGame: () => void;
  drawCards: ()=> void;
  flipBlackCard: ()=> void;
  finishedReadingBlackCard: ()=> void;
  signalReadyToTakeTurn: ()=> void;
  submitWhiteCards: (cards: number[])=> void;
  createRoom: () => void;
  joinRoomById: (roomId: string) => void;
}

const GameContext = React.createContext<FrontendGameState>({
  phase: GamePhases.Preparing,
  players: {},
  submittedWhiteCards: [],
  startGame: ()=>{},
  setName: (_: string)=>{},
  drawCards: ()=>{},
  flipBlackCard: ()=>{},
  finishedReadingBlackCard: ()=>{},
  signalReadyToTakeTurn: ()=>{},
  submitWhiteCards: (_)=>{},
  createRoom:()=>{},
  joinRoomById: (_)=>{}
});

const useGameContext = ()=> {
  return React.useContext(GameContext);
}

let room: Room | undefined = undefined;

const GameProvider: React.FC<{ client: Client }> = ({ children, client })=> {
  const [phase, setPhase] = useState<GamePhases>(GamePhases.Preparing);
  const [me, setMe] = useState<Player | undefined>(undefined);
  const [players, setPlayers] = useState<{[key: string]: Player}>({});
  const [activeBlackCard, setActiveBlackCard] = useState<number | undefined>(undefined);
  const [activePlayerTurn, setActivePlayerTurn] = useState<string | undefined>(undefined);
  const [submittedWhiteCards, setSubmittedWhiteCards ] = useState<Submission[]>([]);
  const [roomId, setRoomId] = useState<string | undefined>(undefined);

  const createRoom = async ()=> {
    const newRoom = await gcCreateRoom(client);
    setupNewRoom(newRoom);
  }

  const joinRoomById = async (roomId: string)=> {
    const newRoom = await gcJoinRoomById(client, roomId);
    setupNewRoom(newRoom);
  }

  const setupNewRoom = (newRoom)=> {
    if (room && room.id !== newRoom.id) {
      room.removeAllListeners();
      room.leave();
      room = undefined;
    }

    room = newRoom;
    attachEventHandersToRoom(room);
    setRoomId(room.id);
  }

  const attachEventHandersToRoom = (room: Room)=> {
    room.onStateChange(handleRoomStateChange);
  }

  const handleRoomStateChange = (state: GameState)=> {
    if (!room) { return; }
    if (state.gamePhase !== phase) {
      setPhase(state.gamePhase);
    }

    if (state.activeBlackCard !== activeBlackCard) {
      setActiveBlackCard(state.activeBlackCard);
    }

    if (state.activePlayerTurn !== activePlayerTurn) {
      setActivePlayerTurn(state.activePlayerTurn);
    }

    if (submittedWhiteCards.length !== state.submittedCards.length) {
      setSubmittedWhiteCards(state.submittedCards);
    }

    /**
     * Check if players object has to be updated.
     * 
     * First, do the cheap comparison of the number of players. Then, do a deep comparison of fields we care about.
     */
    if (Object.keys(state.players).length !== Object.keys(players).length) {
      setPlayers(state.players);
    } else {
      // Todo: smarter comparison. We don't need to update when someone draws a card who isn't me.
      if (!isEqual(state.players, players)) {
        setPlayers(state.players);
      }
    }

    if (!isEqual(me, state.players[room.sessionId])) {
      setMe(state.players[room.sessionId])
    }
  }

  const gameState: FrontendGameState = {
    phase,
    me,
    players,
    roomId,
    submittedWhiteCards,
    activeBlackCard,
    activePlayerTurn,
    setName: (name: string) => setName(name, room!),
    startGame: ()=> {
      console.log("Starting game", room)
      startGame(room!);
    },
    drawCards: ()=> drawCards(room!),
    flipBlackCard: ()=> flipBlackCard(room!),
    finishedReadingBlackCard: ()=> finishedReadingBlackCard(room!),
    signalReadyToTakeTurn: ()=> signalReadyToTakeTurn(room!),
    submitWhiteCards: (cards: number[]) => submitWhiteCards(cards, room!),
    createRoom,
    joinRoomById
  }

  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  )
}

export { GameProvider, GameContext, useGameContext }
export default GameProvider;