import { Commands } from './server/model/Commands';
import { Client,  Room } from "colyseus.js";

export const setName = (name: string, room: Room) => {
  room.send({ command: Commands.ChangeName, name })
}

export const startGame = (room: Room) => {
  room.send({ command: Commands.SignalGameStart })
}

export const drawCards = (room: Room) => {
  room.send({command: Commands.DrawWhiteCards})
}

export const flipBlackCard = (room: Room) => {
  room.send({command: Commands.FlipBlackCard});
}

export const finishedReadingBlackCard = (room: Room) => {
  room.send({command: Commands.FinishedReadingBlackCard});
}

export const signalReadyToTakeTurn = (room: Room) => {
  room.send({command: Commands.SignalReadyToTakeTurn});
}

export const submitWhiteCards = (cards: number[], room: Room) => {
  room.send({command: Commands.SubmitWhiteCards, cards })
}