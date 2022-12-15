import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {GallowsGameWord} from "../../data/gallows-game-word";
import {GallowsGameData} from "../../data/gallows-game-data";

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
  timer: number = 90;
  private timerInterval: any;
  isStarted = false;
  errors: number = 0;

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

    let gallowsGameData: GallowsGameData = {
      isStarted: this.isStarted,
      timer: this.timer,
      points: this.points,
      word: this.word
    }

    return {
      currentScreenSelected: Screens.GallowsGame,
      isStarted: true,
      specificData: gallowsGameData
    }
  }
}

