import { GamePhases } from './GamePhases';
import { Player } from './Player';
import { type, Schema, MapSchema, ArraySchema } from '@colyseus/schema';
import Submission from './Submission';

export default class GameState extends Schema {
  @type({ map: Player })
  players: MapSchema<Player> = new MapSchema<Player>();

  @type('number')
  gamePhase: GamePhases = GamePhases.Preparing;

  @type('number')
  maxHandSize: number = 10;

  @type('number')
  playTo: number = 5;

  @type([Submission])
  submittedCards: ArraySchema<Submission> =new ArraySchema<Submission>();

  @type('boolean')
  playersCanDrawWhiteCards = false;

  @type('boolean')
  playersCanSubmitWhiteCards = false;

  @type('uint8')
  numberOfPlayers = 0;

  @type('string')
  activePlayerTurn: string;

  @type('uint16')
  activeBlackCard: number;
}