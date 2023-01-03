export class Crossword {

  // 5x5
  public rows: string[] = [
    "TLSAE",
    "AODEB",
    "ABTDA",
    "GBUAL",
    "PTSAL",
  ];

  public category: string = "Zufälliges";

  public words: string[] = ["Total", "Last", "Ball"];
  public solvedWords: string[] = [];

  private static alreadyPlayed: Crossword[] = [];

  public static create(category: string, rows: string[], words: string[]) {
    let crossword = new Crossword();

    crossword.category = category;
    crossword.rows = rows;
    crossword.words = words;

    return crossword;
  }

  private static crosswords: Crossword[] = [
    Crossword.create("Ich spare auf ein ...", ["DAVHB", "RBOFK", "ENTZO", "FSUAH", "PUAHN"], ["Haus", "Auto", "Pferd"]),
    Crossword.create("Immer top gestylt.", ["KLIDA", "LARNQ", "MODEY", "URERK", "DLITS"], ["Stil", "Mode", "Trend"]),
    Crossword.create("Am Kiosk.", ["LOLLI", "OVFMS", "TDACI", "TBPKE", "OAWVY"], ["Lolli", "Eis", "Lotto"]),
    Crossword.create("Im Großraumwagen.", ["NETZG", "KRIMA", "OLSEN", "FUCLG", "FKHAY"], ["Netz", "Gang", "Tisch"]),
    Crossword.create("Saturday Nightlife.", ["BUDTY", "UNRIT", "LOIAR", "CMNPA", "KUKAP"], ["Club", "Drink", "Party"]),
  ];

  static next() {

    let nextRandomIndex = 0;

    if (Crossword.alreadyPlayed.length < Crossword.crosswords.length) {
      do {
        nextRandomIndex = Math.floor(Math.random() * Crossword.crosswords.length);
      } while (Crossword.alreadyPlayed.includes(Crossword.crosswords[nextRandomIndex]))
    }

    Crossword.alreadyPlayed.push(Crossword.crosswords[nextRandomIndex]);
    return Crossword.crosswords[nextRandomIndex];
  }
}
