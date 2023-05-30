import {Component} from '@angular/core';
import {Timer} from "../../data/timer";
import {CrucialHint} from "../../data/crucial-hint/crucial-hint";
import {WebSocketService} from "../../services/web-socket.service";
import {Crossword} from "../../data/crossword/crossword";
import {GameData} from "../../data/game-data";
import {CrosswordGameData} from "../../data/crossword/crossword-game-data";
import {Screens} from "../../data/screens";
import {CrucialHintGameData} from "../../data/crucial-hint/crucial-hint-game-data";

@Component({
  selector: 'app-crucial-hint',
  templateUrl: './crucial-hint.component.html',
  styleUrls: ['./crucial-hint.component.scss']
})
export class CrucialHintComponent {

  crucialHint: CrucialHint = new CrucialHint();

  points: number = 0;
  pointsPlayer2: number = 0;
  gamesPlayed: number = 0;
  hintsGiven: string[] = [];
  timer: Timer;

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(90, () => this.send());
    this.crucialHint = CrucialHint.next();
    this.send();
  }

  start() {
    this.hintsGiven = [];
    this.gamesPlayed = 0;
    this.points = 0;
    this.pointsPlayer2 = 0;
    this.timer.start()
    this.send();
  }

  stop() {
    this.timer.stop();
    this.send();
  }

  giveHint() {
    this.hintsGiven.push(this.crucialHint.hints[this.hintsGiven.length]);
    if (this.hintsGiven.length == 5) {
      this.next();
    }
    this.send();
  }

  next() {
    this.crucialHint = CrucialHint.next();
    this.hintsGiven = [];
    this.gamesPlayed++;
    this.send();
  }

  solve() {
    this.points = this.points + (5 - this.hintsGiven.length);
    this.next();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  private prepareData(): GameData {

    let crucialHintGameData: CrucialHintGameData = {
      timer: this.timer,
      points: this.points,
      hintsGiven: this.hintsGiven,
      gamesPlayed: this.gamesPlayed,
      crucialHint: this.crucialHint
    }

    return {
      currentScreenSelected: Screens.CrucialHint,
      isStarted: true,
      specificData: crucialHintGameData
    }
  }

}
