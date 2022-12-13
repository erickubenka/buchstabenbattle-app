import {Games} from "./games";

export class GameData {

  isStarted: boolean = false;
  currentGameSelected: Games = Games.None;
  specificData: object = {};
}
