import {Component} from '@angular/core';
import {WheelData} from "../../data/wheel-data";
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {WheelGameData} from "../../data/wheel-game-data";

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})

export class WheelComponent {
  player1: WheelData = new WheelData();
  player2: WheelData = new WheelData();
  activePlayer = this.player1;

  isStarted: boolean = false;
  private timerInterval: any;

  constructor(private webSocketService: WebSocketService) {
    this.webSocketService.sendMessage("demo", this.prepareData());
  }

  start() {
    this.isStarted = true;
    this.timerInterval = setInterval(() => {
      this.webSocketService.sendMessage("demo", this.prepareData());
    }, 250);
  }

  stop() {
    this.isStarted = false;
    clearInterval(this.timerInterval);
    this.webSocketService.sendMessage("demo", this.prepareData());
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


//
//
// questionList2 = [
//   new Question("A", "Ein Zyklop hat nur eines dieser Sehorgane.", "Auge", false, false),
//   new Question("B", "Welche oberste Instanz im Zivil- und Strafrecht hat ihren Sitz in Karlsruhe?", "Bundesgreichtshof", false, false),
//   new Question("C", "In ihrem Klassiker aus dem Jahr 1972 besingen die Eagles das Hotel ...?", "California", false, false),
//   new Question("D", "Wie heißt die Landeswährung von unter anderem Algerien, Libyien und Jordanien? ", "Dinar", false, false),
//   new Question("E", "Welcher vor allem in den USA beliebte Brotaufstrich ist inb crunchy und creamy erhältlich?", "Erdnussbutter", false, false),
//   new Question("F", "Bei einem sogenannten Walky-Talky handelt es sich um ein transportables ...?", "Funkgerät", false, false),
//   new Question("G", "Alabasta ist eine Abart dieses Minerals aus dem auch feste weiße Verbände bei Knochenbrüchen bestehen.", "Gips", false, false),
//   new Question("H", "Wie heißen die von Lehrern geforderten Arbeiten, die Schülern selbstständig außerhalb des Unterrichts erledigen?", "Hausaufgaben", false, false),
//   new Question("I", "Das goldene Dachl ist eine Touristenattriktion dieser Hauptstadt Tirols", "Innsbruck", false, false),
//   new Question("J", "Maria war laut christlichen Glaubens trotz Jesu Geburt noch ..?", "Jungfrau", false, false),
//   new Question("K", "Dieses Gerät benutzt Magnetismus um die Himmelsrichtugn zu bestimmen.", "Kompass", false, false),
//   new Question("L", "Wie heißt der Teil des Fußballtors der quer auf den beiden Pfosten liegt?", "Latte", false, false),
//   new Question("M", "Wie nennt man sowohl einen Handwerker als auch einen Künslter, der Farben und Lacke auf Flächen aufträgt?", "Maler", false, false),
//   new Question("N", "Als erste Frau den Parteivorsitz der SPD übernahm 2018 Andrea ...?", "Nahles", false, false),
//   new Question("O", "\"Die spinnen die Römer\" ist der Lieblingsspruch welcher Comic-Figuzr?", "Obelix", false, false),
//   new Question("P", "Welcher beliebte Kinosnack wird auch Puffmais genannt?", "Popcorn", false, false),
//   new Question("Q", "Während ein Daiquiri mit Rum gemacht wird, enthält eine Margarita typishcerweise diesen mexikanischen Agavanbrandt. Q im Wort.", "Tequila", false, false),
//   new Question("R", "Wer jemandem übertrieben schmeichelt, macht redensartlich was mit Süßholz?", "raspeln", false, false),
//   new Question("S", "Wie heißen die Spinnentiere mit zwei starken Fangarmen, die an ihrem Schwanz einen Giftstachel haben?", "Skorpion", false, false),
//   new Question("T", "Welche rotierenden Strömungsmaschinen treiben mit Hilfe von Luft, Wasser oder Gase Flugzeuge und Schiffe an?", "Turbinen", false, false),
//   new Question("U", "Auf welcher Ostseeinsel befindet sich die deutsche Stadt Zinnowitz?", "Usedom", false, false),
//   new Question("V", "Auf welchem Schloss in der Nähe von Paris wurde der Friedensvertrag 1919 geschlossen?", "Versailles", false, false),
//   new Question("W", "Die Kurzform dieses englischen Männervornamens lautet Will.", "William", false, false),
//   new Question("X", "In welchem Film von Martin Scorsese fährt Robert de Niro Passagiere durch das nächtliche New York?. X im Wort.", "Taxi Driver", false, false),
//   new Question("Y", "In der Antike war es ein Sportplatz und heute ist eine weiterführende Schule zum Erlangen der Hochschulreife. Y im Wort.", "Gymnasium", false, false),
//   new Question("Z", "Frage1 ", "Antwort1", false, false),
// ];
