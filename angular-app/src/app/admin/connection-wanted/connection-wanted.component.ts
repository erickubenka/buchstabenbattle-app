import {Component} from '@angular/core';
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {WebSocketService} from "../../services/web-socket.service";
import {Connection} from "../../data/connection";
import {ConnectionGameData} from "../../data/connection-game-data";
import {Timer} from "../../data/timer";

@Component({
  selector: 'app-connection-wanted',
  templateUrl: './connection-wanted.component.html',
  styleUrls: ['./connection-wanted.component.scss']
})
export class ConnectionWantedComponent {
  points: number = 0;

  timer: Timer;

  questionIndex = 0;

  connections: Connection[] = [
    new Connection("Ein Traumpaar bildeteten jahrelang Schlager-Queen Helene Fischer und der heutige Traumschiffkapitätn Florian ...?", "SILBE", "REISEN"),
    new Connection("Jürgen Drews bezeichnet sich selbst als König dieser beliebtesten Insel der Deutschen.", "MALLO", "RCA"),
    new Connection("Diesen \"Berg der Berge\" bestieg die Sängerin und Moderatorin Beatrice Egli im August 2021", "MATTE", "RHORN"),
    new Connection("Wie wird die deutsche Musiklegende aus Südafrika Howard Carpendale in Kurzform genannt?", "HOW", "WIE"),
    new Connection("So heißt das mehrtägige Festival, das Andrea Berg alljährlich in Großaspach veranstaltet.", "HEIMS", "PIEL"),
    new Connection("Seine schwarzen Haare waren nur eine Perücke und diese Fiesta wurde für Rex Gildo zum größten hit.", "MEX", "ICANA"),
    new Connection("Als Schlagersänger trug Udo Bockelmann diesen Nachnamen.", "JÜRG", "ENS"),
    new Connection("Vor seiner Umbenennung hieß der ESC \"Grand Prix Eurovision de la ...\"?", "CHANS", "ON"),
    new Connection("Bei der Nr. 1 aller europäischen Schlagerspektakel kann man beim Schlagermove in dieser Stadt feiern.", "HAMB", "URG"),
    new Connection("Der Hit \"Weine nicht kleine Eva\" geht auf's Konto dieser Schlagerband.", "FLI", "PPERS"),
  ]

  randomAnswerStart: Connection[] = shuffle(this.connections);
  randomAnswerEnd: Connection[] = shuffle(this.connections);

  constructor(private webSocketService: WebSocketService) {
    this.timer = Timer.create(90, () => this.send());
    this.send();
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
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
    if (this.questionIndex + 1 < this.connections.length) {
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
      connections: this.connections,
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

