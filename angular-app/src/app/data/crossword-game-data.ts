import {GallowsGameWord} from "./gallows-game-word";
import {Crossword} from "./crossword";

export class CrosswordGameData {

  public isStarted: boolean = false;
  public timer: number = 0;
  public points: number = 0;
  public errors: number = 0;
  public crossword: Crossword = new Crossword();
}
