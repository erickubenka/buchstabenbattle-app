import {Component} from '@angular/core';
import {WheelData} from "../../data/wheel-game/wheel-data";
import {WebSocketService} from "../../services/web-socket.service";
import {GameData} from "../../data/game-data";
import {Screens} from "../../data/screens";
import {WheelGameData} from "../../data/wheel-game/wheel-game-data";
import {WheelQuestion} from "../../data/wheel-game/wheel-question";

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
    this.send();
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

  giveCorrectAnswer(question: WheelQuestion, index: number) {
    this.activePlayer.giveCorrectAnswer(question, index);
    this.send();
  }

  giveWrongAnswer(question: WheelQuestion, index: number) {
    this.activePlayer.giveWrongAnswer(question, index);
    this.send();
  }

  skipAnswer(question: WheelQuestion, index: number) {
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


//
//
// questionList2 = [
//   new Question("A", "Ein Zyklop hat nur eines dieser Sehorgane?", "Auge", false, false),
//   new Question("B", "Welche oberste Instanz im Zivil- und Strafrecht hat ihren Sitz in Karlsruhe?", "Bundesgerichtshof", false, false),
//   new Question("C", "In ihrem Klassiker aus dem Jahr 1972 besingen die Eagles das Hotel ...?", "California", false, false),
//   new Question("D", "Wie heißt die Landeswährung von unter anderem Algerien, Libyien und Jordanien? ", "Dinar", false, false),
//   new Question("E", "Welcher vor allem in den USA beliebte Brotaufstrich ist in crunchy und creamy erhältlich?", "Erdnussbutter", false, false),
//   new Question("F", "Bei einem sogenannten Walky-Talky handelt es sich um ein transportables ...?", "Funkgerät", false, false),
//   new Question("G", "Alabaster ist eine Abart dieses Minerals aus dem auch feste weiße Verbände bei Knochenbrüchen bestehen.", "Gips", false, false),
//   new Question("H", "Wie heißen die von Lehrern geforderten Arbeiten, die Schüler selbstständig außerhalb des Unterrichts erledigen?", "Hausaufgaben", false, false),
//   new Question("I", "Das goldene Dachl ist eine Touristenattraktion dieser Hauptstadt Tirols", "Innsbruck", false, false),
//   new Question("J", "Maria war laut christlichen Glaubens trotz Jesu Geburt noch ..?", "Jungfrau", false, false),
//   new Question("K", "Dieses Gerät benutzt Magnetismus um die Himmelsrichtung zu bestimmen.", "Kompass", false, false),
//   new Question("L", "Wie heißt der Teil des Fußballtors der quer auf den beiden Pfosten liegt?", "Latte", false, false),
//   new Question("M", "Wie nennt man sowohl einen Handwerker, als auch einen Künslter, der Farben und Lacke auf Flächen aufträgt?", "Maler", false, false),
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


/**
 * A - Wer sich nach einem schweren Schlag wieder erholt und erhobene Hauptes weiter macht, steht auf wie der Phoenix aus der ...? Asche
 * B - Wie werden korrupte, undemokratische Staaten umgangsprachlich und nach einer tropsichen Frucht genannt? - _Bananenrepublik
 * C - Mit einem englischen Wort nennt man den Laufsteg für Models? - _Catwalk
 * D - Wie heißt das obere Holzgerüst eines Hauses das namentlich an Sitzmöbel erinnert?... ?  - Dachstuhl
 * E - Eine verbindliche Erklärung vor Gericht oder Schwur nennt man? - Eid
 * F - Ein falches Wasserfahrzeug aus zusammengebundenen Baumstämmen nennt man ... - Floss
 * G - An Tankstellen in den USA bezahlt man das Benzin nicht pro Liter sondern pro ...?  - Gallone
 * H - Welche Sportart wird gespielt wenn der THW Kiel und die SG Flensburg-Handewitt aufeinandertrefen? - Handball
 * I - Ein beschönigendes Wunschdenken welches wenig mit der Wirklichkeit zu tun hat, nennt man? - Illusion
 * J - Ein Spielzeug bei den sich bei miteinander verbunden Scheiben an einer Schnur auf und ab bewegen nennt man?  - Jojo
 * K - Wer fand den Erreger der Tuberkulose und ist Namensgeber des Instituts welches uns regelmäßig zur Pandemie informiert?- Robert Koch
 * L - Aus welcher österreichischen Stadt mit deutschem Namensvetter am Rhein stammt das älteste Tortenrezept der Welt? - Linz
 * M - In welchem Stück von Shakespeare wird ein Herrfü+hrer durch Mord zum König von Schottland? - Macbeth
 * N - Welches walzenförmige Küchengerät kommt beim Ausrollen von Teig zum Einsatz? - Nudelholz
 * O - Welches schmerzstillende Arzneimittel wird aus Mohn gewonnen? Opium
 * P - Die Mirabelle ist eine Unterart der ... ?- Pflaume
 * Q - Wie heißt im American Football die Position des Spielgestalters? - Quarterback
 * R - Welches bekannte Bauwerk über den Canal Grande verbindet die Stadtteile San Polo und San Marco - Ponte die Rialto
 * S - Wie heißt der griechische Tanz der durch Anthony Quinn im Film Alexis Sorbas bekannt wurde? - Siratki
 * T - Mit welchem christlichen Ritual wird eine Person in die Gemeinschaft der Gläubigen aufgenommen? - Taufe
 * U - Wie nennt man den gesamten Mechanismus im Inneren eines analogen Zeitmessers? - Uhrwerk
 * V - Der franz. Begriff für einen Tierarzt lautet .. - Veterinär
 * W - Mit welchem Schlagwort wird das Phänomen des unerwartet schnellen Aufschwungs in Nachkriegsdeutschland beschrieben? - Wirtschaftswunder
 * X - Die Abmeldung eines Studenten von eienr Hochschule heißt? - Exmatrikulation
 * Y - Ein vorlauter und frecher Zeichentrickhase heißt Bugs ... ?- Bunny
 * Z - Wie heißt die griechische Joghurtspeise die mit Gurke und viel Knoblauch angerichtet wird? - Zazaki
 *
 */

/**
 * A - Wie nennt man den würzigen Geruch der sich zum Beispiel bei Kaffee und Tee verbreitet?  - Aroma
 * C - Was für ein Tier ist der Titelheld im Animationsfilm Findet nemo? - Clownfisch
 * F - In welchem Gerät, welches alle Anforderungen erfüllt, können Piloten ihre Fähigkeiten üben?  - Flugsimulator
 * K - Ein schnelles Segelboot mit zwei Rümpofen ist ein? - Katamaran
 * L - Welcher polnsiche Nationalstürmer wurde 2020 erstmal FEuropas Fußballer des JahreS? - Lewandowski
 * M - Wie heißt die kleinere und flachere Zitrusfrucht die der Orange ähnelt? - Mandarine
 * N - Eine Schräglage, aber auch die persönliche Vorliebe für Etwas nennt man ...? - Neigung
 * O - Welcher Begriff bezeichnet eine vorübergehende Bewusstlosigkeit oder Hilfslosigkeit?  - Ohnmacht
 * Q - Die Überreste des Körpers eines Heiligen bezeichnet man als ... ? - Reliquie
 * R - Welcher Kräutertee wächst ausschließlich in der Region Der Cederberge bei Kapstadt?  - Rooibos
 * S - In welcher österreichischen Stadt wurde Wolfang Amadeus Mozart geboren? - Salzbrug
 * T - Wie nennt man ein Unterwassergsschoss mit eigenem Antrieb welches von unter anderem von Ubooten abgefuert wird? - Torpedo
 * U - Die staatliche Abgabe eines Unternehmens an den Staat nennt man? - Umsatzsteuer
 *
 */
