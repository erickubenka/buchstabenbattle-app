import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {GallowsGameData} from "../../data/gallows-game/gallows-game-data";
import {Timer} from "../../data/timer";
import {GallowsGameCategory} from "../../data/gallows-game/gallows-game-category";
import {ScoreData} from "../../data/score/score-data";
import {PlayerScore} from "../../data/score/player-score";

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.scss']
})
export class ScoreDisplayComponent {
  @Input() gameData: GameData = {currentScreenSelected: Screens.Score, isStarted: false, specificData: {}}
  @Input() scoreData: ScoreData = {
    player1: new PlayerScore(),
    player2: new PlayerScore()
  }

  sum(playerScore: any) {
    let score: PlayerScore = PlayerScore.readFromObject(playerScore);
    return score.sum();
  }
}
