import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Screens} from "../../data/screens";
import {GameData} from "../../data/game-data";
import {Crossword} from "../../data/crossword";
import {CrosswordGameData} from "../../data/crossword-game-data";

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.scss']
})
export class CrosswordComponent {
  crossword = new Crossword();
  points: number = 0;
  errors: number = 0;
  timer: number = 90;
  private timerInterval: any;

  isStarted: boolean = false;

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  solve(word: string) {
    if (!this.crossword.solvedWords.includes(word)) {
      this.crossword.solvedWords.push(word);
    }

    if (this.crossword.solvedWords.length == this.crossword.words.length) {
      this.crossword = new Crossword();
      this.points = this.points + (5 - this.errors);
      this.errors = 0;
    }
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.errors = 0;
      this.crossword = new Crossword();
    }
  }

  start() {
    this.isStarted = true;
    this.timerInterval = setInterval(() => {
      this.timer = this.timer - 1;
      if (this.timer <= 0) {
        this.stop();
      }
      this.webSocketService.sendMessage("demo", this.prepareData());
    }, 1000);
  }

  stop() {
    this.isStarted = false;
    clearInterval(this.timerInterval);
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  private prepareData(): GameData {

    let crosswordGameData: CrosswordGameData = {
      isStarted: this.isStarted,
      timer: this.timer,
      points: this.points,
      errors: this.errors,
      crossword: this.crossword
    }

    return {
      currentScreenSelected: Screens.Crossword,
      isStarted: true,
      specificData: crosswordGameData
    }
  }
}
