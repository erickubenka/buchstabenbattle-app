import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Screens} from "../../data/screens";
import {GameData} from "../../data/game-data";
import {Crossword} from "../../data/crossword/crossword";
import {CrosswordGameData} from "../../data/crossword/crossword-game-data";
import {Timer} from "../../data/timer";

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.scss']
})
export class CrosswordComponent {
  crossword: Crossword;
  timer: Timer;

  lettersToHighlight: number[][] = [];
  points: number = 0;
  errors: number = 0;

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(CrosswordGameData.timeInSeconds, () => this.send());
    this.crossword = Crossword.next();
    this.send();
  }

  solve(word: string) {
    if (!this.crossword.solvedWords.includes(word)) {
      this.crossword.solvedWords.push(word);
    }

    let findLettersToHighlight = this.findLettersToHighlight(this.crossword.rows, word);

    // add all found letters to letterToHighlight array
    for (let i = 0; i < findLettersToHighlight.length; i++) {
      let letter = findLettersToHighlight[i];
      if (!this.lettersToHighlight.some(l => l[0] == letter[0] && l[1] == letter[1])) {
        this.lettersToHighlight.push(letter);
      }
    }


    if (this.crossword.solvedWords.length == this.crossword.words.length) {

      // if crossword is finished, sned now, wait 2 sec, continue
      this.send();

      //sleep 2 sec
      setTimeout(() => {
        this.crossword = Crossword.next();
        this.lettersToHighlight = [];
        this.points = this.points + (5 - this.errors);
        this.errors = 0;
        this.send();
      }, 1000);

    }

    this.send();
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.errors = 0;
      this.lettersToHighlight = [];
      this.crossword = Crossword.next();
    }
    this.send();
  }

  start() {
    this.timer.start();
    this.send();
  }

  stop() {
    this.timer.stop();
    this.send();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  /**
   * Reset scores for second player
   */
  resetScore() {
    this.timer = Timer.create(CrosswordGameData.timeInSeconds, () => this.send());
    this.crossword = Crossword.next();
    this.points = 0;
    this.errors = 0;
    this.lettersToHighlight = [];
    this.send();
  }

  private prepareData(): GameData {

    let crosswordGameData: CrosswordGameData = {
      timer: this.timer,
      points: this.points,
      errors: this.errors,
      crossword: this.crossword,
      lettersToHighlight: this.lettersToHighlight
    }

    return {
      currentScreenSelected: Screens.Crossword,
      isStarted: true,
      specificData: crosswordGameData
    }
  }

  private findLettersToHighlight(rows: string[], word: string): number[][] {

    word = word.toUpperCase();
    // 2 dimensions arrays with coordinates of letters to highlight
    let lettersToHighlight: number[][] = [];

    // find all vertical "words".
    let verticalWords: string[] = ["", "", "", "", ""];
    for (let i = 0; i < rows.length; i++) {
      for (let j = 0; j < rows[i].length; j++) {
        verticalWords[j] = verticalWords[j] + rows[i][j];
      }
    }

    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];

      // find all horizontal words in rows and store letter coords to highlight (left to right)
      let index = row.indexOf(word);
      if (index > -1) {
        for (let j = index; j < index + word.length; j++) {
          lettersToHighlight.push([i, j]);
        }
      }

      // all horizontal reversed words (right to elft)
      index = row.split("").reverse().join("").indexOf(word);
      if (index > -1) {
        for (let j = index; j < index + word.length; j++) {
          lettersToHighlight.push([i, row.length - j - 1]);
        }
      }

      // all vertical words (top to bottom)
      index = verticalWords[i].indexOf(word);
      if (index > -1) {
        for (let j = index; j < index + word.length; j++) {
          lettersToHighlight.push([j, i]);
        }
      }

      // all vertical reversed words (bottom to top)
      index = verticalWords[i].split("").reverse().join("").indexOf(word);
      if (index > -1) {
        for (let j = index; j < index + word.length; j++) {
          lettersToHighlight.push([verticalWords[i].length - j - 1, i]);
        }
      }
    }

    // now things get serious. diagonal words.
    // iterate over rows, grab letters that are in a diagonal line (top left to right bottom) and store them each as a string
    // then find words in those strings and store coords of letters to highlight
    for (let i = 0; i < rows.length; i++) {
      let row = rows[i];
      for (let j = 0; j < row.length; j++) {
        let diagonalString = "";
        let x = i;
        let y = j;
        let coordsX = [];
        let coordsY = [];
        while (x < row.length && y < row.length) {
          diagonalString = diagonalString + rows[x][y];
          coordsX.push(x);
          coordsY.push(y);
          x++;
          y++;
        }

        // do not push short strings
        if (diagonalString.length <= 2) {
          break;
        }

        // if word is found store coords of letters to highlight
        if (diagonalString.indexOf(word) > -1 || diagonalString.split("").reverse().join("").indexOf(word) > -1) {
          for (let k = 0; k < word.length; k++) {
            lettersToHighlight.push([coordsX[k], coordsY[k]]);
          }
          break;
        }
      }
    }

    // and now things got more serious - diagonal words in the other direction
    // iterate over rows, grab letters that are in a diagonal line (left bottom to top right) and store them each as a string
    // then find words in those strings and store coords of letters to highlight
    for (let i = rows.length - 1; i >= 0; i--) {
      let row = rows[i];
      for (let j = 0; row.length; j++) {
        let diagonalString = "";
        let x = i;
        let y = j;
        let coordsX = [];
        let coordsY = [];
        while (x >= 0 && y < rows.length) {
          diagonalString = diagonalString + rows[x][y];
          coordsX.push(x);
          coordsY.push(y);
          x--;
          y++;
        }

        // do not push short strings
        if (diagonalString.length <= 2) {
          break;
        }

        // if word is found store coords of letters to highlight
        if (diagonalString.indexOf(word) > -1 || diagonalString.split("").reverse().join("").indexOf(word) > -1) {
          for (let k = 0; k < word.length; k++) {
            lettersToHighlight.push([coordsX[k], coordsY[k]]);
          }
          break;
        }

      }
    }

    return lettersToHighlight;
  }

}
