import {Timer} from "../timer";
import {CrucialHint} from "./crucial-hint";

export class CrucialHintGameData {

  public timer: Timer = new Timer();
  public points: number = 0;
  public hintsGiven: string[] = [];
  public gamesPlayed: number = 0;
  public crucialHint: CrucialHint = new CrucialHint();
}
