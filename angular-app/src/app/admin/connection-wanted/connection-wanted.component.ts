import {Component} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {WebSocketService} from "../../services/web-socket.service";
import {Connection} from "../../data/connection-wanted/connection";
import {ConnectionGameData} from "../../data/connection-wanted/connection-game-data";
import {Timer} from "../../data/timer";
import {ConnectionSet} from "../../data/connection-wanted/connection-set";

@Component({
  selector: 'app-connection-wanted',
  templateUrl: './connection-wanted.component.html',
  styleUrls: ['./connection-wanted.component.scss']
})
export class ConnectionWantedComponent {
  points: number = 0;

  timer: Timer;

  questionIndex = 0;

  connectionSet: ConnectionSet;
  randomAnswerStart: Connection[] = [];
  randomAnswerEnd: Connection[] = [];

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(90, () => this.send());
    this.connectionSet = ConnectionSet.sets[0];
    this.refresh();
  }

  connectionSets() {
    return ConnectionSet.sets;
  }

  start() {
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

  refresh() {
    this.randomAnswerStart = shuffle(this.connectionSet.connections);
    this.randomAnswerEnd = shuffle(this.connectionSet.connections);
    this.send();
  }

  solve(connection: Connection) {
    this.points = this.points + 2;
    connection.isAnswered = true;
    connection.isAnsweredCorrectly = true;
    this.increaseIndex();
  }

  solveWithError(connection: Connection) {
    connection.isAnswered = true;
    connection.isAnsweredCorrectly = false;
    this.increaseIndex();
  }

  private increaseIndex() {
    if (this.questionIndex + 1 < this.connectionSet.connections.length) {
      this.questionIndex++;
    } else {
      this.stop();
    }

    this.send();
  }

  private prepareData(): GameData {

    let connectionWantedGameData: ConnectionGameData = {
      timer: this.timer,
      points: this.points,
      connectionSet: this.connectionSet,
      questionIndex: this.questionIndex,
      answerStart: this.randomAnswerStart,
      answerEnd: this.randomAnswerEnd,
    }

    return {
      currentScreenSelected: Screens.ConnectionWanted,
      isStarted: true,
      specificData: connectionWantedGameData
    }
  }
}

function shuffle(input: Connection[]) {
  let result: Connection[] = [];
  input.forEach(i => {
    result.push(i);
  })

  let counter = input.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = result[counter];
    result[counter] = result[index];
    result[index] = temp;
  }

  return result;
}

