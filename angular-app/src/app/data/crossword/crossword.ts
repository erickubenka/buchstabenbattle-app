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

  public static create(category: string, rows: string[], words: string[]) {
    let crossword = new Crossword();

    crossword.category = category;
    crossword.rows = rows;
    crossword.words = words;

    return crossword;
  }
}
