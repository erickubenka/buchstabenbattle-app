import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {GallowsGameWord} from "../../data/gallows-game/gallows-game-word";
import {GallowsGameData} from "../../data/gallows-game/gallows-game-data";
import {Timer} from "../../data/timer";
import {GallowsGameCategory} from "../../data/gallows-game/gallows-game-category";

@Component({
  selector: 'app-gallows-game',
  templateUrl: './gallows-game.component.html',
  styleUrls: ['./gallows-game.component.scss']
})
export class GallowsGameComponent {

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(90, () => this.send());
    this.category = GallowsGameCategory.random();
    this.word = this.category.nextWord();
    this.send();
  }

  points: number = 0;
  solvedWords: GallowsGameWord[] = []
  unsolvedWords: GallowsGameWord[] = []
  word: GallowsGameWord;
  category: GallowsGameCategory;

  // start timer defaults to 90 seconds
  timer: Timer;
  errors: number = 0;

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  addError() {
    this.errors++;

    if (this.errors == 5) {
      this.unsolvedWords.push(this.word);
      this.errors = 0;
      this.word = this.category.nextWord();
    }

    this.send();
  }

  solveLetter(word: GallowsGameWord, letter: string) {
    word.solve(letter);
    this.send();
  }

  solveWord() {

    // calculate points: (5 per word, but for every mistake reduce by one)
    this.points = this.points + (5 - this.errors);

    // reset game to new word.
    this.errors = 0;
    this.solvedWords.push(this.word);
    this.word = this.category.nextWord();
    this.send();
  }

  private prepareData(): GameData {

    let gallowsGameData: GallowsGameData = {
      timer: this.timer,
      points: this.points,
      word: this.word,
      category: this.category
    }

    return {
      currentScreenSelected: Screens.GallowsGame,
      isStarted: true,
      specificData: gallowsGameData
    }
  }

}
