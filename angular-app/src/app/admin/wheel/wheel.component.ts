import {Component} from '@angular/core';
import {WheelData} from "../../data/wheel/wheel-data";
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {WheelGameData} from "../../data/wheel/wheel-game-data";
import {Question} from "../../data/wheel/question";
import {QuestionSet} from "../../data/wheel/question-set";

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})

export class WheelComponent {

  player1: WheelData;
  player2: WheelData;
  activePlayer: WheelData;

  isStarted: boolean = false;
  private timerInterval: any;

  constructor(private webSocketService: WebSocketService) {
    this.player1 = new WheelData();
    this.player2 = new WheelData();
    this.player1.questionSet = QuestionSet.sets[0];
    this.player2.questionSet = QuestionSet.sets[0];
    this.activePlayer = this.player1;
    this.send();
  }

  questionSets() {
    return QuestionSet.sets;
  }

  start() {
    this.isStarted = true;
    this.timerInterval = setInterval(() => {
      this.send();
    }, 1000);
  }

  stop() {
    this.isStarted = false;
    clearInterval(this.timerInterval);
    this.send();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  startPlayer() {
    this.activePlayer.start();
    this.send();
  }

  stopPlayer() {
    this.activePlayer.stop();
    this.send();
  }

  giveCorrectAnswer(question: Question, index: number) {
    this.activePlayer.giveCorrectAnswer(question, index);
    this.send();
  }

  giveWrongAnswer(question: Question, index: number) {
    this.activePlayer.giveWrongAnswer(question, index);
    this.send();
  }

  skipAnswer(question: Question, index: number) {
    this.activePlayer.skipAnswer(question, index);
    this.send();
  }

  switchPlayer() {
    if (this.player1 == this.activePlayer) {
      this.activePlayer = this.player2;
    } else {
      this.activePlayer = this.player1;
    }

    this.send();
  }

  private prepareData(): GameData {

    let wheelGameData: WheelGameData = {
      activePlayer: this.activePlayer,
      isStarted: false
    }

    return {
      currentScreenSelected: Screens.Wheel,
      isStarted: true,
      specificData: wheelGameData
    }
  }

}
