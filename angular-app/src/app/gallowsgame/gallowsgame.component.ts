import {Component} from '@angular/core';

@Component({
  selector: 'app-gallowsgame',
  templateUrl: './gallowsgame.component.html',
  styleUrls: ['./gallowsgame.component.scss']
})
export class GallowsgameComponent {

  points: number = 0;
  solvedWords: string[] = []

  word: string = "";

  timer = 60;
  isStarted = false;

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
