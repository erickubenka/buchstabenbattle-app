import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {GallowsGameData} from "../../data/gallows-game-data";
import {GallowsGameWord} from "../../data/gallows-game-word";
import {Timer} from "../../data/timer";


@Component({
  selector: 'app-gallows-game-display',
  templateUrl: './gallows-game-display.component.html',
  styleUrls: ['./gallows-game-display.component.scss']
})
export class GallowsGameDisplayComponent {

  @Input() gameData: GameData = {currentScreenSelected: Screens.GallowsGame, isStarted: false, specificData: {}}
  @Input() gallowsGameData: GallowsGameData = {
    points: 0,
    timer: new Timer(),
    word: new GallowsGameWord("Beispiel")
  }
}
