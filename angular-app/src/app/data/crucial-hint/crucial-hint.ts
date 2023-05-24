import {CrucialHintComponent} from "../../admin/crucial-hint/crucial-hint.component";

export class CrucialHint {

  public name: string = "";
  public imagePath: string = "";
  public hints: string[] = [];
  private static alreadyPlayed: CrucialHint[] = [];

  public static create(name: string, imagePath: string, hints: string[]) {
    let crucialHint = new CrucialHint();

    crucialHint.name = name;
    crucialHint.imagePath = imagePath;
    crucialHint.hints = hints;

    return crucialHint
  }

  private static crucialHints: CrucialHint[] = [
    CrucialHint.create("Demo", "demo.jpg", ["Dies", "Ist", "Eine", "Demo"]),
    CrucialHint.create("Brandenburger Tor", "/assets/images/crucial-hint/brandenburger-tor.jpg", ["Berlin", "Tor", "Brandenburger", "Brandenburg"]),
  ];

  static next() {

    let nextRandomIndex = 0;

    if (CrucialHint.alreadyPlayed.length < CrucialHint.crucialHints.length) {
      do {
        nextRandomIndex = Math.floor(Math.random() * CrucialHint.crucialHints.length);
      } while (CrucialHint.alreadyPlayed.includes(CrucialHint.crucialHints[nextRandomIndex]))
    }

    CrucialHint.alreadyPlayed.push(CrucialHint.crucialHints[nextRandomIndex]);
    return CrucialHint.crucialHints[nextRandomIndex];
  }
}
