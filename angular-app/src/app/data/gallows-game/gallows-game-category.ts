import {GallowsGameWord} from "./gallows-game-word";

export class GallowsGameCategory {

  public category: string = "";
  // public words: GallowsGameWord[] = [];
  public words: string[] = [];

  public word: GallowsGameWord = GallowsGameWord.create("");

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

  nextWord() {
    this.index++;

    if (this.index < this.words.length) {
      this.word = GallowsGameWord.create(this.words[this.index]);
    }
  }

  static categories: GallowsGameCategory[] = [
    GallowsGameCategory.create("Kleine Tiere", ["Maus", "Ameise", "Fliege", "Goldfisch", "Spinne", "Kakerlake", "Libelle", "Biene", "Wespe", "Schnecke", "Skorpion", "Heuschrecke", "Schmetterling", "Hummel"]),
    GallowsGameCategory.create("Wildtiere", ["Elefant", "Giraffe", "Leopard", "Krokodil", "Zebra", "Fledermaus", "Feldhase", "Wildschwein", "Biber", "Fischotter", "Waldkauz", "Ringelnatter"]),
    // todo - add more things
    GallowsGameCategory.create("Außen am Körper", ["Arm", "Ohr", "Kopf", "Hand", "Brust", "Hals", "Finger", "Bauch"]),
    GallowsGameCategory.create("Innen im Körper", ["Herz", "Darm", "Leber", "Niere", "Milz", "Lunge", "Gehirn"]),
  ]

  static random() {
    return GallowsGameCategory.categories[Math.floor(Math.random() * GallowsGameCategory.categories.length)];
  }
}

