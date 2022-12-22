import {GallowsGameWord} from "./gallows-game-word";
import {Timer} from "./timer";

export class GallowsGameData {

  public timer: Timer = new Timer();
  public points: number = 0;
  public word: GallowsGameWord = new GallowsGameWord("foobar");
}
