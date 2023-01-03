import {GallowsGameWord} from "./gallows-game-word";

export class GallowsGameCategory {

  public category: string = "";
  // public words: GallowsGameWord[] = [];
  public words: string[] = [];

  private index = -1;


  // public static create(category: string, words: GallowsGameWord[]): GallowsGameCategory {
  public static create(category: string, words: string[]): GallowsGameCategory {
    let gallowsGameCategory = new GallowsGameCategory();
    gallowsGameCategory.category = category;
    gallowsGameCategory.words = words;

    return gallowsGameCategory;
  }

  constructor() {
  }

  nextWord(): GallowsGameWord {

    this.index++;
    return GallowsGameWord.create(this.words[this.index]);
  }

  private static categories: GallowsGameCategory[] = [
    GallowsGameCategory.create("Kleine Tiere", ["Maus", "Ameise", "Fliege", "Goldfisch", "Spinne", "Kakerlake", "Libelle", "Biene", "Wespe", "Schnecke", "Skorpion", "Heuschrecke", "Schmetterling", "Hummel"]),
    GallowsGameCategory.create("Wildtiere", ["Elefant", "Giraffe", "Leopard", "Krokodil", "Zebra", "Fledermaus", "Feldhase", "Wildschwein", "Biber", "Fischotter", "Waldkauz", "Ringelnatter"]),
  ]

  static random() {
    return GallowsGameCategory.categories[Math.floor(Math.random() * GallowsGameCategory.categories.length)];
  }


}

