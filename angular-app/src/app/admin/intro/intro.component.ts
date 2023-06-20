import {Component} from '@angular/core';
import {WebSocketService} from "../../services/web-socket.service";
import {Timer} from "../../data/timer";
import {CrosswordGameData} from "../../data/crossword/crossword-game-data";
import {Crossword} from "../../data/crossword/crossword";
import {GameData} from "../../data/game-data";
import {CrucialHintGameData} from "../../data/crucial-hint/crucial-hint-game-data";
import {Screens} from "../../data/screens";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  private isStarted: boolean = false;
  private isVideoShown: boolean = false;
  private isImageShown: boolean = false;

  constructor(private webSocketService: WebSocketService) {
    this.send();
  }

  startImage() {
    this.isStarted = true;
    this.isVideoShown = false;
    this.isImageShown = true;
    this.send()
  }

  startVideo() {
    this.isStarted = true;
    this.isVideoShown = true;
    this.isImageShown = false;
    this.send();
  }

  stopVideo() {
    this.isStarted = false;
    this.isVideoShown = false;
    this.isImageShown = false;
    this.send();
  }

  stopImage() {
    this.isStarted = false;
    this.isVideoShown = false;
    this.isImageShown = false;
    this.send();
  }

  send() {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  private prepareData(): GameData {

    return {
      currentScreenSelected: Screens.Intro,
      isStarted: this.isStarted,
      specificData: {
        isVideoShown: this.isVideoShown,
        isImageShown: this.isImageShown
      }
    }
  }


}
