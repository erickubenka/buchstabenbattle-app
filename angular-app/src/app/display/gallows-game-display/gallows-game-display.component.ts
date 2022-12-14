import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Games} from "../../data/games";
import {GallowsGameData} from "../../data/gallows-game-data";
import {GallowsGameWord} from "../../data/gallows-game-word";


@Component({
  selector: 'app-gallows-game-display',
  templateUrl: './gallows-game-display.component.html',
  styleUrls: ['./gallows-game-display.component.css']
})
export class GallowsGameDisplayComponent {

  @Input() gameData: GameData = {currentGameSelected: Games.GallowsGame, isStarted: false, specificData: {}}
  @Input() gallowsGameData: GallowsGameData = {
    isStarted: false,
    points: 0,
    timer: 0,
    word: new GallowsGameWord("Beispiel")
  }
}
