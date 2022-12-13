import {Component} from '@angular/core';
import {Message, WebSocketService} from "../web-socket.service";

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  public data: Message = {
    source: "Mut zur Luecke",
    content: "- SPIEL NICHT GESTARTET"
  };

  constructor(private webSocketService: WebSocketService) {
    webSocketService.messages.subscribe(value => {
      this.data = value;
    });
  }
}
