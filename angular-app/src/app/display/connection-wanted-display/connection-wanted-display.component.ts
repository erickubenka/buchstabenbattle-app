import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {ConnectionGameData} from "../../data/connection-game-data";

@Component({
  selector: 'app-connection-wanted-display',
  templateUrl: './connection-wanted-display.component.html',
  styleUrls: ['./connection-wanted-display.component.scss']
})
export class ConnectionWantedDisplayComponent {

  @Input() gameData: GameData = {currentScreenSelected: Screens.Crossword, isStarted: false, specificData: {}};

  @Input() connectionWantedGameData: ConnectionGameData = {
    isStarted: false,
    points: 0,
    timer: 0,
    connections: [],
    answerStart: [],
    answerEnd: [],
    questionIndex: 0,
  };

}
