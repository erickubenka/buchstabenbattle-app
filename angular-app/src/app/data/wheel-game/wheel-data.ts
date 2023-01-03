import {WheelQuestion} from "./wheel-question";
import {Timer} from "../timer";

export class WheelData {

  questionList = [
    new WheelQuestion("A", "Welche Popgruppe gewann 1974 den Grand Prix Eurovisoopn Song mit dem Song Whaterloo?", "ABBA", false, false),
    new WheelQuestion("B", "Wer hat in Schwimmanstalten die Aufsicht am Beckenrand?", "Bademeister", false, false),
    new WheelQuestion("C", "Wie nennt man die wöchentliche Rangliste von Songs und Alben?", "Charts", false, false),
    new WheelQuestion("D", "Frage1", "Dracula", false, false),
    new WheelQuestion("E", "Wie werden die ersten Züge, also die erste Phase eines Schachspiels, gennant?", "Eröffnung", false, false),
    new WheelQuestion("F", "Auf welchen Teil des Fahrrads werden Mantel und Schlauch aufgezogen?", "Felge", false, false),
    new WheelQuestion("G", "Zu welchem Staat gehören die beliebten Urlaubsinseln Kreta und Korfu?", "Griechenland", false, false),
    new WheelQuestion("H", "Wie nennt man die Anhänger den Calvinismus die vor den Katholiken aus Frankreich flüchten mussten?", "Hugenotten", false, false),
    new WheelQuestion("I", "In der deutschen Sprache gibt es die 3 Modi: Imperativ, Konjunktiv und...?", "Indikativ", false, false),
    new WheelQuestion("J", "Wie nennt man die Gesamtheit der Geschworenen im Strafprozess?", "Jury", false, false),
    new WheelQuestion("K", "Wie heißt die in einem evanglischem Gottesdienst vollzogene Bekenntnis von Jugendlichen zum christlichen Glauben?", "Konfirmation", false, false),
    new WheelQuestion("L", "Von welchen Rundungen hat ein traditoneller Golfplatz 18 Stück an der Zahl?", "Löcher", false, false),
    new WheelQuestion("M", "Wie heißt der höchste Berg der Alpen?", "Mont Blanc", false, false),
    new WheelQuestion("N", "Ist die ferienbedingte Urlaubszeit vorbei, beginnt in vielen Urlaubsorten die deutlich günstigere ...?", "Nebensaison", false, false),
    new WheelQuestion("O", "Wie lautet die Berufsbezeichnung für einen Orgelspieler?", "Organist", false, false),
    new WheelQuestion("P", "Wie bezeichnet man allgemein Konfekt mit einem Schokoladenüberzug oder einer Füllung aus Creme oder Weinbrandt?", "Praline", false, false),
    new WheelQuestion("Q", "Deutschland ist aufgrund vieler Kohlekraftwerke europäischer Spitzenreiter bei der Emission dieses Metalls und Nervengifts.", "Quecksilber", false, false),
    new WheelQuestion("R", "Einer der bekanntesten deutschen Dichter war Rainer Maria ... ", "Rilke", false, false),
    new WheelQuestion("S", "Welche großen oder repräsentativen Räume in Gebäduen dienen unter anderem Festlichkeiten und Versammlungen?", "Saal", false, false),
    new WheelQuestion("T", "Diesen kleinen Drachen ließ Peter Maffay im Kinder-Musical aufleben.", "Tabaluga", false, false),
    new WheelQuestion("U", "In welche Kammer des britischen Parlaments setzte Street-Art Künstler Bansky lauter Affen?", "Unterhaus", false, false),
    new WheelQuestion("V", "Was für ein Tier ist der Schneekönig der als Synonym für große Freude steht?", "Vogel", false, false),
    new WheelQuestion("W", "In Tasmanien begegnet einem diese 80cm große Känguruart ständig.", "Wallaby", false, false),
    new WheelQuestion("X", "Frage1", "Antwort1", false, false),
    new WheelQuestion("Y", "Wie heißt die nördlichste deustche Insel dessen Hauptort Westerland ist?", "Sylt", false, false),
    new WheelQuestion("Z", "Welches Gewürz wird aus Baumrinde gewonnen?", "Zimt", false, false),
  ];

  answersGivenCorrectly = 0;
  answersGiven = 0;
  questionIndex = 0;
  timer: Timer = Timer.create(60, () => {
  });

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  giveCorrectAnswer(question: WheelQuestion, index: number) {
    question.isAnswered = true;
    question.isAnsweredCorrectly = true;
    this.answersGiven = this.questionList.filter(q => q.isAnswered).length;
    this.answersGivenCorrectly = this.questionList.filter(q => q.isAnswered && q.isAnsweredCorrectly).length;

    this.questionIndex = this.getNextQuestionIndex(index);

    if (this.answersGiven == this.questionList.length) {
      this.stop();
    }
  }

  giveWrongAnswer(question: WheelQuestion, index: number) {

    question.isAnswered = true;
    question.isAnsweredCorrectly = false;
    this.answersGiven = this.questionList.filter(q => q.isAnswered).length;
    // handling wrong answer is like skipped answer
    this.skipAnswer(question, index);
  }

  skipAnswer(question: WheelQuestion, index: number) {

    // todo:: determine if other player is eliminated
    // if no, stop time, switch component
    this.stop();

    // if yes, show next question
    this.questionIndex = this.getNextQuestionIndex(index);
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
