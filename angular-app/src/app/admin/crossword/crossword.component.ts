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

  points: number = 0;
  errors: number = 0;

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(90, () => this.send());
    this.crossword = Crossword.next();
    this.send();
  }

  solve(word: string) {
    if (!this.crossword.solvedWords.includes(word)) {
      this.crossword.solvedWords.push(word);
    }

    if (this.crossword.solvedWords.length == this.crossword.words.length) {
      this.crossword = Crossword.next();
      this.points = this.points + (5 - this.errors);
      this.errors = 0;
    }
    this.send();
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.errors = 0;
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

  private prepareData(): GameData {

    let crosswordGameData: CrosswordGameData = {
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
