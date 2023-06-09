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
    this.timer = Timer.create(GallowsGameData.timeInSeconds, () => this.send());
    this.category = GallowsGameCategory.random();
    this.send();
  }

  points: number = 0;
  solvedWords: GallowsGameWord[] = []
  unsolvedWords: GallowsGameWord[] = []
  category: GallowsGameCategory;

  categories() {
    return GallowsGameCategory.categories;
  }

  // start timer defaults to 90 seconds
  timer: Timer;
  errors: number = 0;

  start() {
    this.category.nextWord();
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

  addError() {
    this.errors++;

    if (this.errors == GallowsGameData.pointsPerWord) {
      this.unsolvedWords.push(this.category.word);
      this.errors = 0;
      this.category.nextWord();
    }

    this.send();
  }

  solveLetter(word: GallowsGameWord, letter: string) {
    word.solve(letter);
    this.send();
  }

  solveWord() {

    // calculate points: (5 per word, but for every mistake reduce by one)
    this.points = this.points + (GallowsGameData.pointsPerWord - this.errors);

    // reset game to new word.
    this.errors = 0;
    this.solvedWords.push(this.category.word);
    this.category.nextWord();

    // exit when every world was solved.
    if (this.category.words.length == this.solvedWords.length + this.unsolvedWords.length) {
      this.stop();
      return;
    }

    this.send();
  }

  private prepareData(): GameData {

    let gallowsGameData: GallowsGameData = {
      timer: this.timer,
      points: this.points,
      errors: this.errors,
      category: this.category
    }

    return {
      currentScreenSelected: Screens.GallowsGame,
      isStarted: true,
      specificData: gallowsGameData
    }
  }

}
