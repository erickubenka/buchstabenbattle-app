import {Component, Input} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {PlayerScore} from "../../data/score/player-score";
import {LocalStorageService} from "../../services/local-storage.service";
import {ScoreData} from "../../data/score/score-data";

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  private static localStorageKey = "score";

  // when this component is instantiated in a template.
  player1: PlayerScore = new PlayerScore();
  player2: PlayerScore = new PlayerScore();

  constructor(private webSocketService: WebSocketService, private localStorageService: LocalStorageService) {
    let score: ScoreData = JSON.parse(this.localStorageService.get(ScoreComponent.localStorageKey));

    if (score != null) {
      this.player1 = PlayerScore.readFromObject(score.player1);
      this.player2 = PlayerScore.readFromObject(score.player2);
    }

    this.send();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  save() {
    let score = new ScoreData();
    score.player1 = this.player1;
    score.player2 = this.player2;
    this.localStorageService.put(ScoreComponent.localStorageKey, JSON.stringify(score));
    this.send();
  }

  reset() {
    this.localStorageService.remove(ScoreComponent.localStorageKey);
    this.player1 = new PlayerScore();
    this.player2 = new PlayerScore();
    this.send();
  }

  private prepareData(): GameData {

    let score: ScoreData = {
      player1: this.player1,
      player2: this.player2
    }

    return {
      currentScreenSelected: Screens.Score,
      isStarted: true,
      specificData: score
    }
  }
}
