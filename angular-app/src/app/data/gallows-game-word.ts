export class GallowsGameWord {
  static letters: string[] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  public full: string;
  public withGaps: string = "";
  public missingLetters: string[] = [];
  public solvedLetters: string[] = [];

  constructor(word: string) {
    this.full = word.toUpperCase();
    this.withGaps = word.toUpperCase();
    this.initialize();
  }

  private initialize() {

    // determine unique letters in word.
    let lettersInWord: string[] = [];
    this.full.split('').forEach((letter) => {
      if (!lettersInWord.includes(letter)) {
        lettersInWord.push(letter);
      }
    });

    // get two random letters of that list that should be removed.
    for (let i = 0; i < 4; i++) {
      let indexOfLetterToRemove = Math.floor(Math.random() * lettersInWord.length);

      while (this.missingLetters.includes(lettersInWord[indexOfLetterToRemove])) {
        indexOfLetterToRemove = Math.floor(Math.random() * lettersInWord.length);
      }

      this.missingLetters.push(lettersInWord[indexOfLetterToRemove]);
    }

    // remove them
    this.missingLetters.forEach((letter) => {
      this.withGaps = this.withGaps.replaceAll(letter, "_");
    });
  }

  solve(letter: string) {

    let letters = this.full.split('');
    for (let i = 0; i < letters.length; i++) {
      let l = letters[i];
      if (l.toUpperCase() == letter.toUpperCase()) {
        let strArr = this.withGaps.split('');
        strArr[i] = l;
        this.withGaps = strArr.join('');
      }
    }

    this.solvedLetters.push(letter);
  }
}

