import {Screens} from "./screens";

export class GameData {

  isStarted: boolean = false;
  currentScreenSelected: Screens = Screens.None;
  specificData: object = {};
}
