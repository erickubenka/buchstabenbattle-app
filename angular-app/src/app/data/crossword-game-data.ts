import {GallowsGameWord} from "./gallows-game-word";
import {Crossword} from "./crossword";
import {Timer} from "./timer";

export class CrosswordGameData {

  public timer: Timer = new Timer();
  public points: number = 0;
  public errors: number = 0;
  public crossword: Crossword = new Crossword();
}
