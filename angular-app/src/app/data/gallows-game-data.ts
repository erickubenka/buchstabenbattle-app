import {GallowsGameWord} from "./gallows-game-word";

export class GallowsGameData {

  public isStarted: boolean = false;
  public timer: number = 0;
  public points: number = 0;
  public word: GallowsGameWord = new GallowsGameWord("foobar");
}
