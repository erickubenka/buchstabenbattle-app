import {GallowsGameWord} from "./gallows-game-word";
import {Timer} from "../timer";
import {GallowsGameCategory} from "./gallows-game-category";

export class GallowsGameData {

  public timer: Timer = new Timer();
  public points: number = 0;
  public errors: number = 0;
  public pointsPerWord: number = 5;
  public category: GallowsGameCategory = new GallowsGameCategory();
}
