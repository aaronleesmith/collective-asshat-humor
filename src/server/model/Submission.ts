import { type, Schema } from '@colyseus/schema';

export default class Submission extends Schema {
  @type('string')
  submittedBy: string;

  @type('number')
  firstCard: number;

  @type('number')
  secondCard: number;

  constructor(submittedBy: string, firstCard: number, secondCard?: number) {
    super();

    this.submittedBy = submittedBy;
    this.firstCard = firstCard;
    this.secondCard = secondCard;
  }
}