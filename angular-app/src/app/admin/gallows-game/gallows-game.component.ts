import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Games} from "../../data/games";
import {GallowsGameWord} from "../../data/gallows-game-word";

@Component({
  selector: 'app-gallows-game',
  templateUrl: './gallows-game.component.html',
  styleUrls: ['./gallows-game.component.scss']
})
export class GallowsGameComponent {

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  points: number = 0;
  solvedWords: GallowsGameWord[] = []
  unsolvedWords: GallowsGameWord[] = []
  word: GallowsGameWord = new GallowsGameWord("Handbremse");

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
      this.webSocketService.sendMessage("demo", this.prepareData());
    }, 1000);
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.unsolvedWords.push(this.word);
      this.errors = 0;
      this.word = new GallowsGameWord("Vorderrad")
    }
  }

  solveWord() {

    // calculate points: (5 per word, but for every mistake reduce by one)
    this.points = this.points + (5 - this.errors);

    // reset game to new word.
    this.errors = 0;
    this.solvedWords.push(this.word);
    this.word = new GallowsGameWord("Ruecklicht");
  }

  private prepareData(): GameData {
    return {
      currentGameSelected: Games.GallowsGame,
      isStarted: true,
      specificData: {
        isStarted: this.isStarted,
        timer: this.timer,
        points: this.points,
        word: this.word
      }
    }
  }
}

