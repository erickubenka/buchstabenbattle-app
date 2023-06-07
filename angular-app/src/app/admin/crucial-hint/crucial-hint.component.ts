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

  singlePlayer: boolean = true;
  points: number = 0;
  pointsPlayer2: number = 0;
  gamesPlayed: number = 0;
  hintsGiven: string[] = [];
  timer: Timer;
  isStarted: boolean = false;

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(120, () => this.send());
    this.crucialHint = CrucialHint.next();
    this.send();
  }

  toggleSinglePlayer() {
    this.singlePlayer = !this.singlePlayer;
    this.send();
  }

  start() {
    this.hintsGiven = [];
    this.gamesPlayed = 0;
    this.points = 0;
    this.pointsPlayer2 = 0;

    // Start timer only in single player mode.
    if (this.singlePlayer) {
      this.timer.start()
    }
    this.isStarted = true;
    this.send();
  }

  stop() {
    this.isStarted = false;
    this.timer.stop();
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
      this.points = this.points + (5 - this.hintsGiven.length);
    }

    // Only add points for player 2 when multiplayer selected.
    if (!this.singlePlayer && playerNumber == 2) {
      this.pointsPlayer2 = this.pointsPlayer2 + (5 - this.hintsGiven.length);
    }
    this.next();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  private prepareData(): GameData {

    let crucialHintGameData: CrucialHintGameData = {
      timer: this.timer,
      singlePlayer: this.singlePlayer,
      points: this.points,
      pointsPlayer2: this.pointsPlayer2,
      hintsGiven: this.hintsGiven,
      gamesPlayed: this.gamesPlayed,
      crucialHint: this.crucialHint
    }

    return {
      currentScreenSelected: Screens.CrucialHint,
      isStarted: this.isStarted,
      specificData: crucialHintGameData
    }
  }

}
