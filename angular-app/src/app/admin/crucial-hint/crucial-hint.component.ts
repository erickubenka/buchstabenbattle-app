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

  pointsPlayer1: number = 0;
  pointsPlayer2: number = 0;
  gamesPlayed: number = 0;
  hintsGiven: string[] = [];

  constructor(private webSocketService: WebSocketService) {
    this.send();
  }

  start() {
    this.crucialHint = CrucialHint.next();
    this.hintsGiven = [];
    this.gamesPlayed = 0;
    this.pointsPlayer1 = 0;
    this.pointsPlayer2 = 0;
    this.send();
  }

  stop() {
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

  solve(playerNumber: number) {
    if (playerNumber == 1) {
      this.pointsPlayer1 = this.pointsPlayer1 + (5 - this.hintsGiven.length);
    }
    if (playerNumber == 2) {
      this.pointsPlayer2 = this.pointsPlayer2 + (5 - this.hintsGiven.length);
    }
    this.next();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  private prepareData(): GameData {

    let crucialHintGameData: CrucialHintGameData = {
      pointsPlayer1: this.pointsPlayer1,
      pointsPlayer2: this.pointsPlayer2,
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
