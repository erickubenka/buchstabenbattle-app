import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Games} from "../../data/games";
import {GameData} from "../../data/game-data";

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
      currentGameSelected: Games.Crossword,
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

export class Crossword {

  // 5x5
  public rows: string[] = [
    "TLSAE",
    "AODEB",
    "ABTDA",
    "GBUAL",
    "PTSAL",
  ];

  public words: string[] = ["Total", "Last", "Ball"];
  public solvedWords: string[] = [];
}
