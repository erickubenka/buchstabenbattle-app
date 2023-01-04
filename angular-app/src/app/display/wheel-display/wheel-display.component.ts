import {Component, Input} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {ConnectionGameData} from "../../data/connection-wanted/connection-game-data";
import {WheelGameData} from "../../data/wheel/wheel-game-data";
import {WheelData} from "../../data/wheel/wheel-data";

@Component({
  selector: 'app-wheel-display',
  templateUrl: './wheel-display.component.html',
  styleUrls: ['./wheel-display.component.scss']
})
export class WheelDisplayComponent {

  @Input() gameData: GameData = {currentScreenSelected: Screens.Wheel, isStarted: false, specificData: {}};

  @Input() wheelgameData: WheelGameData = {
    isStarted: false,
    activePlayer: new WheelData()
  };
}
