import { type, Schema, MapSchema, ArraySchema } from '@colyseus/schema';
import Submission from './Submission';

export class Player extends Schema {
  @type('string')
  id: string;

  @type(['uint16']) 
  whiteCards: ArraySchema<number> = new ArraySchema<number>();

  @type(['uint8'])
  blackCards: ArraySchema<number> = new ArraySchema<number>();

  @type('string')
  name: string;

  @type('boolean')
  isReady: boolean = false;

  @type('boolean')
  isHost: boolean;

  @type(Submission)
  submittedCardInCurrentRound: Submission;

  @type(['uint16'])
  wonBlackCards: ArraySchema<number> = new ArraySchema<number>();

  constructor(isHost = false, id: string, name: string = 'New player') {
    super();

    this.id = id;
    this.isHost = isHost;
    this.name = name;
  }
}