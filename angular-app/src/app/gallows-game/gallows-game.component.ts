import {Component} from '@angular/core';
import {WebSocketService} from "../web-socket.service";

@Component({
  selector: 'app-gallows-game',
  templateUrl: './gallows-game.component.html',
  styleUrls: ['./gallows-game.component.scss']
})
export class GallowsGameComponent {

  constructor(private webSocketService: WebSocketService) {
  }

  points: number = 0;
  solvedWords: Word[] = []
  unsolvedWords: Word[] = []
  word: Word = new Word("Handbremse");

  // start timer defaults to 90 seconds
  timer = 90;
  isStarted = false;
  errors: number = 0;

  start() {
    this.isStarted = true;
    let timerInterval = setInterval(() => {
      this.timer = this.timer - 1;
      if (this.timer <= 0) {
        clearInterval(timerInterval);
      }

      let message = this.prepareData();
      this.webSocketService.sendMessage("Mut zur Luecke", message);

    }, 1000);
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.unsolvedWords.push(this.word);
      this.errors = 0;
      this.word = new Word("Vorderrad")
    }
  }

  solveWord() {

    // calculate points: (5 per word, but for every mistake reduce by one)
    this.points = this.points + (5 - this.errors);

    // reset game to new word.
    this.errors = 0;
    this.solvedWords.push(this.word);
    this.word = new Word("Ruecklicht");
  }

  private prepareData() {

    return {
      isStarted: this.isStarted,
      timer: this.timer,
      points: this.points,
      word: this.word
    }
  }
}

export class Word {
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
      this.withGaps = this.withGaps.replaceAll(letter, " ");
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


