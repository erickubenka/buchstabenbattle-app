import {GallowsGameWord} from "../gallows-game/gallows-game-word";
import {Crossword} from "./crossword";
import {Timer} from "../timer";

export class CrosswordGameData {

  public timer: Timer = new Timer();
  public points: number = 0;
  public errors: number = 0;
  public crossword: Crossword = new Crossword();

  private static crosswords: Crossword[] = [
    Crossword.create("Ich spare auf ein ...", ["DAVHB", "RBOFK", "ENTZO", "FSUAH", "PUAHN"], ["Haus", "Auto", "Pferd"]),
    Crossword.create("Immer top gestylt.", ["KLIDA", "LARNQ", "MODEY", "URERK", "DLITS"], ["Stil", "Mode", "Trend"]),
    Crossword.create("Am Kiosk.", ["LOLLI", "OVFMS", "TDACI", "TBPKE", "OAWVY"], ["Lolli", "Eis", "Lotto"]),
    Crossword.create("Im Großraumwagen.", ["NETZG", "KRIMA", "OLSEN", "FUCLG", "FKHAY"], ["Netz", "Gang", "Tisch"]),
    Crossword.create("Saturday Nightlife.", ["BUDTY", "UNRIT", "LOIAR", "CMNPA", "KUKAP"], ["Club", "Drink", "Party"]),
  ];
}
