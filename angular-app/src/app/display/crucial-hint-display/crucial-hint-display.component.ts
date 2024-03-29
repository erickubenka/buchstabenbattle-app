import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {CrucialHintGameData} from "../../data/crucial-hint/crucial-hint-game-data";
import {CrucialHint} from "../../data/crucial-hint/crucial-hint";
import {Timer} from "../../data/timer";
import {GallowsGameData} from "../../data/gallows-game/gallows-game-data";

@Component({
  selector: 'app-crucial-hint-display',
  templateUrl: './crucial-hint-display.component.html',
  styleUrls: ['./crucial-hint-display.component.scss']
})
export class CrucialHintDisplayComponent {

  protected readonly CrucialHintGameData = CrucialHintGameData;

  @Input() gameData: GameData = {currentScreenSelected: Screens.CrucialHint, isStarted: false, specificData: {}}
  @Input() crucialHintGameData: CrucialHintGameData = {
    timer: new Timer(),
    singlePlayer: true,
    points: 0,
    pointsPlayer2: 0,
    crucialHint: new CrucialHint(),
    gamesPlayed: 0,
    hintsGiven: []
  }

}
