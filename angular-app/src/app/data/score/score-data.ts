import {PlayerScore} from "./player-score";

export class ScoreData {
  player1: PlayerScore;
  player2: PlayerScore;

  constructor() {
    this.player1 = new PlayerScore();
    this.player2 = new PlayerScore();
  }
}
