import { BlackCard } from './model/BlackCard';
import { Cards } from './model/Cards';
import { Commands } from './model/Commands';
import { Room, Client } from "colyseus";
import GameState from './model/GameState';
import { Player } from './model/Player';
import { isUndefined } from 'lodash';
import logger from './logger';
import { GamePhases } from './model/GamePhases';
import { shuffle } from 'lodash';
import Submission from './model/Submission';

export default class CAHRoom extends Room<GameState> {
  /**
   * Determines when players can draw cards, in general.
   * 
   * Phases where this is allowed:
   * - When a player is reading the black card.
   * - When players are submitting their white cards.
   * - When a player is revealing the white cards.
   */
  private get playersCanDrawWhiteCards(): boolean {
    return this.state.gamePhase === GamePhases.Reading || this.state.gamePhase === GamePhases.Responding || this.state.gamePhase === GamePhases.Revealing;
  } 

  private get newPlayersCanJoinRoom(): boolean {
    return this.state.gamePhase === GamePhases.Preparing;
  }

  /**
   * Determines when players are allowed to submit white cards.
   * 
   * Phases where this is allowed:
   * - When a player is reading black cards.
   * - When all players are responding to black card being read.
   */
  private get playersCanSubmitWhiteCards(): boolean {
    return this.state.gamePhase === GamePhases.Reading || this.state.gamePhase === GamePhases.Responding;
  }

  private get playersCanChooseWinners(): boolean {
    return this.state.gamePhase === GamePhases.Revealing;
  }

  private get numberOfPlayers(): number {
    return Object.keys(this.state.players).length;
  }

  private get nextPlayerId(): string {
    const playerIds = Object.keys(this.state.players);
    const indexOfCurrentPlayer = playerIds.indexOf(this.state.activePlayerTurn);
    return playerIds[playerIds.length % indexOfCurrentPlayer];
  }
  
  private topOfWhiteDeck = 0;
  private topOfBlackDeck = 0;
  private whiteDeck = shuffle([...Array(Cards.whiteCards.length).keys()]);
  private blackDeck = shuffle([...Array(Cards.blackCards.length).keys()]);

  onCreate (options: any) {
    logger.verbose('Room created', {options});

    this.setPrivate(true);
    this.setState(new GameState())
  }

  onJoin (client: Client, options: { playerName?: string}) {
    if (!this.newPlayersCanJoinRoom) { 
      logger.verbose('A player tried to join after the game was started.', client);
      throw new Error("The game has already started!");
    }

    logger.verbose('Client joined', { options });

    const isHost = this.numberOfPlayers === 0;
    this.state.players[client.sessionId] = new Player(isHost, client.sessionId, options.playerName ? options.playerName : `Random asshat #${this.numberOfPlayers + 1}`);
  }

  onMessage (client: Client, message: any) {
    logger.verbose('Message received', {client, message});

    const { command, ...rest } = message;
    if (isUndefined(command)) { return; }

    const player = this.state.players[client.sessionId];
    this.handleCommand(command, rest, player);
  }

  onLeave (client: Client, consented: boolean) {
    // todo: what do we do if the host leaves or when players leave?
  }

  onDispose() {

  }

  /**
   * Central handler for messages.
   */
  private handleCommand(command: Commands, data: any, player: Player) {
    switch (command) {
      case Commands.ChangeName:
        data.name && this.changePlayerName(data.name, player);
        break;
      
      case Commands.SignalReady:
        this.signalPlayerReady(data.isReady, player);
        break;

      case Commands.DrawWhiteCards:
        this.playerDrawWhiteCards(player);
        break;

      case Commands.SignalGameStart:
        this.startGame(player);
        break;

      case Commands.SubmitWhiteCards:
        this.playerSubmitWhiteCards(player, data.cards);
        break;

      case Commands.ChooseWhiteCardWinner:
        this.playerChooseWhiteCardWinner(player, data.card);
        break;

      case Commands.FlipBlackCard:
        this.playerFlippedBlackCard(player);
        break;

      case Commands.FinishedReadingBlackCard:
        this.playerFinishedReadingBlackCard(player);
        break;

      case Commands.SignalReadyToTakeTurn:
        this.playerSignaledReadyToStartTurn(player);
        break;

      default: 
        break;
    }
  }

  private startGame(player: Player) {
    if (!player.isHost) { return; } // Only the host can start the game.
    if (this.state.gamePhase !== GamePhases.Preparing) { return; } // Can't start a game already in progress.

    this.transitionFromPreparingToRevealing();
  }

  private changePlayerName(newName: string, player: Player) {
    player.name = newName;
  }

  private signalPlayerReady(isReady = true, player: Player) {
    player.isReady = isReady;
  }

  private playerDrawWhiteCards(player: Player) {
    if (!this.playersCanDrawWhiteCards) { return; } // Players can't draw cards right now.
    if (player.whiteCards.length === this.state.maxHandSize) { return; } // Player can't take any more cards.
    if (this.topOfWhiteDeck === this.whiteDeck.length) { return; } // No more cards.
    
    /**
     * Hand out the next card in the white deck, increment the top pointer.
     */
    const cardsToDraw = [];
    while (cardsToDraw.length + player.whiteCards.length < this.state.maxHandSize) {
      cardsToDraw.push(this.whiteDeck[this.topOfWhiteDeck++]);  
    }

    player.whiteCards.push(...cardsToDraw);
  }

  private playerSubmitWhiteCards(player: Player, cards: number[]) {
    if (!this.playersCanSubmitWhiteCards) { return; }

    const submission = new Submission(player.id, cards[0], cards.length === 2 ? cards[1] : undefined);
    this.state.submittedCards.push(submission);
    player.submittedCardInCurrentRound = submission;
  }

  /**
   * The card is the index on the "submittedCards" array of the chosen winner.
   */
  private playerChooseWhiteCardWinner(player: Player, submission: Submission) {
    if (!this.playersCanChooseWinners) { return; }
    if (player.id !== this.state.activePlayerTurn) { return; } // Only the player who's turn it is can choose the winning card.

    (this.state.players[submission.submittedBy] as Player).wonBlackCards.push(this.state.activeBlackCard);
    this.transitionFromRevealToCleanup();
  }

  private playerFlippedBlackCard(player: Player) {
    if (player.id !== this.state.activePlayerTurn) { return; } // Only the player who's turn it is can flip the black card.

    this.state.activeBlackCard = this.blackDeck[this.topOfBlackDeck];
    this.topOfBlackDeck++;
  }

  private playerFinishedReadingBlackCard(player: Player) {
    if (player.id !== this.state.activePlayerTurn) { return; } // Only the player who's turn it is can flip the black card.

    this.transitionFromRevealingToResponding();
  }

  private playerSignaledReadyToStartTurn(player: Player) {
    if (player.id !== this.state.activePlayerTurn) { return; } // Only the player who's turn it is can start their turn.
    this.transitionFromCleanupToReveal();
  }

  private transitionFromRevealToCleanup() {
    this.state.activePlayerTurn = this.nextPlayerId;
    this.state.gamePhase = GamePhases.CleaningUp;
  }
  
  private transitionFromRevealingToResponding() {
    this.state.gamePhase = GamePhases.Responding;
  }

  private transitionFromCleanupToReveal() {
    this.state.gamePhase = GamePhases.Revealing;
  }

  private transitionFromPreparingToRevealing() {
    this.state.activePlayerTurn = Object.keys(this.state.players)[0];
    this.state.gamePhase = GamePhases.Revealing;
  }
}