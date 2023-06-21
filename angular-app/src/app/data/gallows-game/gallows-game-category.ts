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
    GallowsGameCategory.create("Kleine Tiere", ["Maus", "Ameise", "Fliege", "Goldfisch", "Spinne", "Kakerlake", "Libelle", "Biene", "Wespe", "Schnecke"]),
    GallowsGameCategory.create("Wildtiere", ["Elefant", "Giraffe", "Leopard", "Krokodil", "Zebra", "Fledermaus", "Feldhase", "Wildschwein", "Biber", "Fischotter"]),
    GallowsGameCategory.create("Außen am Körper", ["Arm", "Ohr", "Kopf", "Hand", "Brust", "Hals", "Finger", "Bauch", "Augen", "Nase"]),
    GallowsGameCategory.create("Innen im Körper", ["Herz", "Darm", "Leber", "Niere", "Milz", "Lunge", "Gehirn", "Magen", "Blase", "Nerven"]),
    GallowsGameCategory.create("Küchenutensilien ohne Strom", ["Messer", "Topf", "Schere", "Suppenkelle", "Korkenzieher", "Geschirr", "Gabel", "Pfanne", "Wok", "Teller"]),
    GallowsGameCategory.create("Haushaltsgeräte mit Strom", ["Waschmaschine", "Herd", "Toaster", "Fernseher", "Mikrowelle", "Staubsauger", "Haartrockner", "Stabmixer", "Kaffeemaschine", "Radio"]),
    GallowsGameCategory.create("Aus Glas", ["Flasche", "Aquarium", "Fenster", "Spiegel", "Karaffe", "Vase", "Brille", "Lampe", "Vitrine", "Terrarium"]),
    GallowsGameCategory.create("Aus Metall", ["Hammer", "Felge", "Tresor", "Alufolie", "Schraube", "Zange", "Gabel", "Messer", "Schmuck", "Nagel"]),
    GallowsGameCategory.create("Fast Food", ["Hamburger", "Gyros", "Pommes", "HotDog", "Currywurst", "Sandwich", "Kebap", "Burrito", "Pizza", "Taco"]),
    GallowsGameCategory.create("Star Köche", ["Rosin", "Schuhbeck", "Herrmann", "Raue", "Rach", "Lafer", "Kumptner", "Poletto", "Müller", "Oliver"]),
    GallowsGameCategory.create("Schulfächer", ["Deutsch", "Mathematik", "Sport", "Biologie", "Chemie", "Englisch", "Religion", "Musik", "Geschichte", "Erdkunde"]),
    GallowsGameCategory.create("Berufe", ["Polizist", "Lehrer", "Pilot", "Arzt", "Friseur", "Koch", "Maler", "Maurer", "Schreiner", "Fleischer"]),
    GallowsGameCategory.create("Heißgetränk", ["Tee", "Cappuccino", "Kakao", "Punsch", "Milchkaffee", "Espresso", "Grog", "Glühwein", "Kaffee", "Met"]),
    GallowsGameCategory.create("Kaltgetränk", ["Wasser", "Limonade", "Eistee", "Bowle", "Saft", "Milchshake", "Radler", "Hefeweizen", "Energydrink", "Cola"]),
  ]

  static random() {
    return GallowsGameCategory.categories[Math.floor(Math.random() * GallowsGameCategory.categories.length)];
  }
}

