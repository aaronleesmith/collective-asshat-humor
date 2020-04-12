export enum GamePhases {
  /**
   * Game has not started, players are joining.
   */
  Preparing,

  /**
   * The player who's turn it is is flipping over and reading the black card for the round.
   */
  Revealing,

  /**
   * Players are submitting their white cards.
   */
  Responding,

  /**
   * The player who's turn it is is reading the white cards.
   */
  Reading,

  /**
   * The round is being cleaned up, and it will be passed to the next player soon.
   */
  CleaningUp,

  /**
   * The game is over, the game is being reviewed.
   */
  Concluding
}