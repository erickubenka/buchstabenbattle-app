import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Screens} from "../../data/screens";
import {GameData} from "../../data/game-data";
import {Crossword} from "../../data/crossword";

@Component({
  selector: 'app-crossword',
  templateUrl: './crossword.component.html',
  styleUrls: ['./crossword.component.scss']
})
export class CrosswordComponent {
  crossword = new Crossword();
  points = 0;
  timer = 90;
  isStarted = false;

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  solve(word: string) {
    if (!this.crossword.solvedWords.includes(word)) {
      this.crossword.solvedWords.push(word);
    }

    if (this.crossword.solvedWords.length == this.crossword.words.length) {
      this.crossword = new Crossword();
      this.points++;
    }
  }

  start() {
    this.isStarted = true;
    let timerInterval = setInterval(() => {
      this.timer = this.timer - 1;
      if (this.timer <= 0) {
        clearInterval(timerInterval);
      }

      this.webSocketService.sendMessage("demo", this.prepareData());

    }, 1000);
  }

  private prepareData(): GameData {
    return {
      currentScreenSelected: Screens.Crossword,
      isStarted: true,
      specificData: {
        isStarted: this.isStarted,
        timer: this.timer,
        points: this.points,
        crossword: this.crossword
      }
    }
  }
}
