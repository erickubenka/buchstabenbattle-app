import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})

export class WheelComponent {

  @Input() name: string = "";

  questionList = [
    new Question("A", "Welche Popgruppe gewann 1974 den Grand Prix Eurovisoopn Song mit dem Song Whaterloo?", "ABBA", false, false),
    new Question("B", "Wer hat in Schwimmanstalten die Aufsicht am Beckenrand?", "Bademeister", false, false),
    new Question("C", "Wie nennt man die wöchentliche Rangliste von Songs und Alben?", "Charts", false, false),
    new Question("D", "", "Dracula", false, false),
    new Question("E", "Wie werden die ersten Züge, also die erste Phase eines Schachspiels, gennant?", "Eröffnung", false, false),
    new Question("F", "Auf welchen Teil des Fahrrads werden Mantel und Schlauch aufgezogen?", "Felge", false, false),
    new Question("G", "Zur welchem Staat gehören die beliebten Urlaubsinseln Kreta und Korfu?", "Griechenland", false, false),
    new Question("H", "Frage1", "Antwort1", false, false),
    new Question("I", "In der deutschen Sprache gibt es die 3 Modi: Imperativ, Konjunktiv und...?", "Indikativ", false, false),
    new Question("J", "Frage1", "Antwort1", false, false),
    new Question("K", "Wie heißt die in einem evanglischem Gottesdienst vollzogene Bekenntnis von Jugendlichen zum christlichen Glauben?", "Konfirmation", false, false),
    new Question("L", "Von welchen Rundungen hat ein traditoneller Golfplatz 18 Stück an der Zahl?", "Löcher", false, false),
    new Question("M", "Wie heißt der höchste Berg der Alpen?", "Mont Blanc", false, false),
    new Question("N", "Ist die ferienbedingte Urlaubszeit vorbei, beginnt in vielen urlaubsorten die deutlich günstigere ...?", "Nebensaison", false, false),
    new Question("O", "Wie lautet die Berufsbezeichnung für einen Orgelspieler?", "Organist", false, false),
    new Question("P", "Wie bezeichnet man allgemein Konfekt mit einem Schokoladenüberzug oder einer Füllung aus Creme oder Weinbrandt?", "Praline", false, false),
    new Question("Q", "Deutschland ist aufgrund vieler Kohlekraftwerke europäischer Spitzenreiter bei der Emission dieses Metalls und Nervengifts.", "Quecksilber", false, false),
    new Question("R", "Einer der bekanntesten deutschen Dichter war Rainer Maria ... ", "Rilke", false, false),
    new Question("S", "Welche großen oder repräsentativen Räume in Gebäduen dienen unter anderem Festlichkeiten und Versammlungen?", "Antwort1", false, false),
    new Question("T", "Diesen kleinen Drachen ließ Peter Maffay Kinder-Musical aufleben.", "Tabaluga", false, false),
    new Question("U", "In welche Kammer des britischen Parlaments setzte Streetard Künstler Bansky lauter Affen?", "Unterhaus", false, false),
    new Question("V", "In Deutschland ist nicht nur die Durchführung eines Verbrechens strafbar, sondern auch der...", "Antwort1", false, false),
    new Question("W", "In Tasmanien begegnet einem diese 80cm große Känguruart ständig.", "Wallaby", false, false),
    new Question("X", "Frage1", "Antwort1", false, false),
    new Question("Y", "Frage1", "Antwort1", false, false),
    new Question("Z", "Frage1", "Antwort1", false, false),
  ];

  questionList2 = [
    new Question("A", "Ein Zyklop hat nur eines dieser Sehorgane.", "Auge", false, false),
    new Question("B", "Welche oberste Instanz im Zivil- und Strafrecht hat ihren Sitz in Karlsruhe?", "Bundesgreichtshof", false, false),
    new Question("C", "In ihrem Klassiker aus dem Jahr 1972 besingen die Eagles das Hotel ...?", "California", false, false),
    new Question("D", "Wie heißt die Landeswährung von unter anderem Algerien, Libyien und Jordanien? ", "Dinar", false, false),
    new Question("E", "Welcher vor allem in den USA beliebte Brotaufstrich ist inb crunchy und creamy erhältlich?", "Erdnussbutter", false, false),
    new Question("F", "Bei einem sogenannten Walky-Talky handelt es sich um ein transportables ...?", "Funkgerät", false, false),
    new Question("G", "Alabasta ist eine Abart dieses Minerals aus dem auch feste weiße Verbände bei Knochenbrüchen bestehen.", "Gips", false, false),
    new Question("H", "Wie heißen die von Lehrern geforderten Arbeiten, die Schülern selbstständig außerhalb des Unterrichts erledigen?", "Hausaufgaben", false, false),
    new Question("I", "Das goldene Dachl ist eine Touristenattriktion dieser Hauptstadt Tirols", "Innsbruck", false, false),
    new Question("J", "Maria war laut christlichen Glaubens trotz Jesu Geburt noch ..?", "Jungfrau", false, false),
    new Question("K", "Dieses Gerät benutzt Magnetismus um die Himmelsrichtugn zu bestimmen.", "Kompass", false, false),
    new Question("L", "Wie heißt der Teil des Fußballtors der quer auf den beiden Pfosten liegt?", "Latte", false, false),
    new Question("M", "Wie nennt man sowohl einen Handwerker als auch einen Künslter, der Farben und Lacke auf Flächen aufträgt?", "Maler", false, false),
    new Question("N", "Als erste Frau den Parteivorsitz der SPD übernahm 2018 Andrea ...?", "Nahles", false, false),
    new Question("O", "\"Die spinnen die Römer\" ist der Lieblingsspruch welcher Comic-Figuzr?", "Obelix", false, false),
    new Question("P", "Welcher beliebte Kinosnack wird auch Puffmais genannt?", "Popcorn", false, false),
    new Question("Q", "Während ein Daiquiri mit Rum gemacht wird, enthält eine Margarita typishcerweise diesen mexikanischen Agavanbrandt. Q im Wort.", "Tequila", false, false),
    new Question("R", "Wer jemandem übertrieben schmeichelt, macht redensartlich was mit Süßholz?", "raspeln", false, false),
    new Question("S", "Wie heißen die Spinnentiere mit zwei starken Fangarmen, die an ihrem Schwanz einen Giftstachel haben?", "Skorpion", false, false),
    new Question("T", "Welche rotierenden Strömungsmaschinen treiben mit Hilfe von Luft, Wasser oder Gase Flugzeuge und Schiffe an?", "Turbinen", false, false),
    new Question("U", "Auf welcher Ostseeinsel befindet sich die deutsche Stadt Zinnowitz?", "Usedom", false, false),
    new Question("V", "Auf welchem Schloss in der Nähe von Paris wurde der Friedensvertrag 1919 geschlossen?", "Versailles", false, false),
    new Question("W", "Die Kurzform dieses englischen Männervornamens lautet Will.", "William", false, false),
    new Question("X", "In welchem Film von Martin Scorsese fährt Robert de Niro Passagiere durch das nächtliche New York?. X im Wort.", "Taxi Driver", false, false),
    new Question("Y", "In der Antike war es ein Sportplatz und heute ist eine weiterführende Schule zum Erlangen der Hochschulreife. Y im Wort.", "Gymnasium", false, false),
    new Question("Z", "Frage1 ", "Antwort1", false, false),
  ];

  answersGivenCorrectly = 0;
  answersGiven = 0;
  nextQuestionIndex = 0;
  timer = 60;
  isTimerStarted = false;
  timerInterval: any;

  startTimer() {
    console.log("Timer started / resumed: " + this.timer);
    this.isTimerStarted = true;

    this.timerInterval = setInterval(() => {
      this.timer = this.timer - 1;
      if (this.timer <= 0) {
        console.log("End game because timer limit was reached.");
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    this.isTimerStarted = false;
    clearInterval(this.timerInterval);
    console.log("Timer stopped at " + this.timer);
  }

  giveCorrectAnswer(question: Question, index: number) {
    question.isAnswered = true;
    question.isAnsweredCorrectly = true;
    this.answersGiven = this.questionList.filter(q => q.isAnswered).length;
    this.answersGivenCorrectly = this.questionList.filter(q => q.isAnswered && q.isAnsweredCorrectly).length;

    this.nextQuestionIndex = this.getNextQuestionIndex(index);

    if (this.answersGiven == this.questionList.length) {
      console.log("Game ended: Every Question done.");
      this.stopTimer();
    }
  }

  giveWrongAnswer(question: Question, index: number) {

    question.isAnswered = true;
    question.isAnsweredCorrectly = false;
    this.answersGiven = this.questionList.filter(q => q.isAnswered).length;
    // handling wrong answer is like skipped answer
    this.skipAnswer(question, index);
  }

  skipAnswer(question: Question, index: number) {

    // todo:: determine if other player is eliminated
    // if no, stop time, switch component
    this.stopTimer();

    // if yes, show next question
    this.nextQuestionIndex = this.getNextQuestionIndex(index);
  }

  private getNextQuestionIndex(index: number): number {

    // early exit because every answer given was already right.
    if (this.answersGiven == this.questionList.length) {
      return -1;
    }

    let nextIndex = index + 1;

    if (nextIndex >= this.questionList.length) {
      nextIndex = 0;
    }

    do {
      if (this.questionList[nextIndex].isAnswered) {
        nextIndex++;
      }

      if (nextIndex >= this.questionList.length) {
        nextIndex = 0;
      }

    } while (this.questionList[nextIndex].isAnswered)

    return nextIndex;
  }
}

export class Question {

  public letter: string;
  public question: string;
  public answer: string;
  public isAnswered: boolean;
  public isAnsweredCorrectly: boolean;

  constructor(letter: string, question: string, answer: string, isAnswered: boolean, answeredCorrectly: boolean) {
    this.letter = letter;
    this.question = question;
    this.answer = answer;
    this.isAnswered = isAnswered
    this.isAnsweredCorrectly = answeredCorrectly;
  }
}
