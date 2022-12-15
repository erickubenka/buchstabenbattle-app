import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {CrosswordGameData} from "../../data/crossword-game-data";
import {Crossword} from "../../data/crossword";

@Component({
  selector: 'app-crossword-display',
  templateUrl: './crossword-display.component.html',
  styleUrls: ['./crossword-display.component.scss']
})
export class CrosswordDisplayComponent {

  @Input() gameData: GameData = {currentScreenSelected: Screens.Crossword, isStarted: false, specificData: {}}

  @Input() crosswordGameData: CrosswordGameData = {
    isStarted: false,
    points: 0,
    timer: 0,
    errors: 0,
    crossword: new Crossword()
  }
}
