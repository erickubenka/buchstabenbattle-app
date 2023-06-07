import {WheelData} from "./wheel-data";

export class WheelGameData {
  activePlayer: WheelData = new WheelData(0);
  isStarted: boolean = false;
}
