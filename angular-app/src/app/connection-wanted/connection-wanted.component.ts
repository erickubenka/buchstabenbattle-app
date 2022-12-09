import {Component} from '@angular/core';

@Component({
  selector: 'app-connection-wanted',
  templateUrl: './connection-wanted.component.html',
  styleUrls: ['./connection-wanted.component.scss']
})
export class ConnectionWantedComponent {
  points: number = 0;

  timer: number = 60;
  isStarted: boolean = false;

  start() {
    this.isStarted = true;
    let timerInterval = setInterval(() => {
      this.timer = this.timer - 1;
      if (this.timer <= 0) {
        clearInterval(timerInterval);

      }
    }, 1000);
  }
}

export class Connections {


}
