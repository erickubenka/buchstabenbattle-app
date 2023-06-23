import {GallowsGameWord} from "../gallows-game/gallows-game-word";
import {Crossword} from "./crossword";
import {Timer} from "../timer";

export class CrosswordGameData {

  public static readonly pointsPerCrossword: number = 5;
  public static readonly timeInSeconds: number = 120;

  public timer: Timer = new Timer();
  public points: number = 0;
  public errors: number = 0;
  public crossword: Crossword = new Crossword();
  public lettersToHighlight: number[][] = [];

}
