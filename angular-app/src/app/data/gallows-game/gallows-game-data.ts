import {GallowsGameWord} from "./gallows-game-word";
import {Timer} from "../timer";
import {GallowsGameCategory} from "./gallows-game-category";

export class GallowsGameData {

  public static readonly timeInSeconds: number = 90;
  public static readonly pointsPerWord: number = 5;

  public timer: Timer = new Timer();
  public points: number = 0;
  public errors: number = 0;
  public wrongGuessedLetters: string = "";
  public category: GallowsGameCategory = new GallowsGameCategory();

}
