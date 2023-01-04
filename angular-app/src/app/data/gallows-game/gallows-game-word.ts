export class GallowsGameWord {
  public full: string = "";
  public withGaps: string = "";
  public missingLetters: string[] = [];
  public solvedLetters: string[] = [];

  static create(word: string): GallowsGameWord {
    let gallowsGameWord = new GallowsGameWord();
    gallowsGameWord.full = word.toUpperCase();
    gallowsGameWord.withGaps = word.toUpperCase();
    gallowsGameWord.initialize();

    return gallowsGameWord;
  }

  constructor() {
  }

  private initialize() {

    // determine unique letters in word.
    let lettersInWord: string[] = [];
    this.full.split('').forEach((letter) => {
      if (!lettersInWord.includes(letter)) {
        lettersInWord.push(letter);
      }
    });

    // issue #6 - do not remove all chars/letter when word is too short
    let lettersToRemove = 0
    if (lettersInWord.length <= 4) {
      lettersToRemove = lettersInWord.length - 1;
    } else if (lettersInWord.length <= 7) {
      lettersToRemove = lettersInWord.length - 2;
    } else {
      lettersToRemove = lettersInWord.length - 4;
    }

    for (let i = 0; i < lettersToRemove; i++) {
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

