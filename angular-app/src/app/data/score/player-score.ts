export class PlayerScore {

  gallowsGameScore: number = 0;
  crosswordScore: number = 0;
  connectionWantedScore: number = 0;
  crucialHintScore: number = 0;

  public static readFromObject(json: any): PlayerScore {

    let playerScore = new PlayerScore();
    playerScore.gallowsGameScore = json.gallowsGameScore;
    playerScore.crosswordScore = json.crosswordScore;
    playerScore.connectionWantedScore = json.connectionWantedScore;
    playerScore.crucialHintScore = json.crucialHintScore;
    return playerScore;
  }

  sum() {
    return this.gallowsGameScore + this.crosswordScore + this.connectionWantedScore + this.crucialHintScore;
  }
}
