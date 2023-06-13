import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {CrosswordGameData} from "../../data/crossword/crossword-game-data";
import {Crossword} from "../../data/crossword/crossword";
import {Timer} from "../../data/timer";

@Component({
  selector: 'app-crossword-display',
  templateUrl: './crossword-display.component.html',
  styleUrls: ['./crossword-display.component.scss']
})
export class CrosswordDisplayComponent {

  protected readonly CrosswordGameData = CrosswordGameData;

  @Input() gameData: GameData = {currentScreenSelected: Screens.Crossword, isStarted: false, specificData: {}}

  @Input() crosswordGameData: CrosswordGameData = {
    points: 0,
    timer: new Timer(),
    errors: 0,
    crossword: new Crossword(),
    lettersToHighlight: []
  }

  highlightLetter(row: number, column: number) {
    return this.crosswordGameData.lettersToHighlight.some(l => l[0] == row && l[1] == column);
  }
}
