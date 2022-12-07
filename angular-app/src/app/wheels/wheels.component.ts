import {Component} from '@angular/core';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  styleUrls: ['./wheels.component.scss']
})
export class WheelsComponent {
  player1 = true;
  player2 = false;

  switchPlayer(player: number) {
    if (player == 2) {
      this.player1 = false;
      this.player2 = true;
    } else {
      this.player1 = true;
      this.player2 = false;
    }
  }
}
