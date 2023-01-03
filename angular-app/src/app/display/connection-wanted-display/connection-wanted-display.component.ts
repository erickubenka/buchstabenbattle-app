import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {ConnectionGameData} from "../../data/connection-wanted/connection-game-data";
import {Timer} from "../../data/timer";

@Component({
  selector: 'app-connection-wanted-display',
  templateUrl: './connection-wanted-display.component.html',
  styleUrls: ['./connection-wanted-display.component.scss']
})
export class ConnectionWantedDisplayComponent {

  @Input() gameData: GameData = {currentScreenSelected: Screens.Crossword, isStarted: false, specificData: {}};

  @Input() connectionWantedGameData: ConnectionGameData = {
    points: 0,
    timer: new Timer(),
    connections: [],
    answerStart: [],
    answerEnd: [],
    questionIndex: 0,
  };

}
