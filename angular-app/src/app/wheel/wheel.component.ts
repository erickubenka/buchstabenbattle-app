import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})

export class WheelComponent {

  @Input() name: string = "";

  questionList = [
    new Question("A", "Test1", "Antwort1", false),
    new Question("B", "Test1", "Antwort1", false),
    new Question("C", "Test1", "Antwort1", false),
    new Question("D", "Test1", "Antwort1", false),
    new Question("E", "Test1", "Antwort1", false),
    new Question("F", "Test1", "Antwort1", false),
    new Question("G", "Test1", "Antwort1", false),
    new Question("H", "Test1", "Antwort1", false),
    new Question("I", "Test1", "Antwort1", false),
    new Question("J", "Test1", "Antwort1", false),
    new Question("K", "Test1", "Antwort1", false),
    new Question("L", "Test1", "Antwort1", false),
    new Question("M", "Test1", "Antwort1", false),
    new Question("N", "Test1", "Antwort1", false),
    new Question("O", "Test1", "Antwort1", false),
    new Question("P", "Test1", "Antwort1", false),
    new Question("Q", "Test1", "Antwort1", false),
    new Question("R", "Test1", "Antwort1", false),
    new Question("S", "Test1", "Antwort1", false),
    new Question("T", "Test1", "Antwort1", false),
    new Question("U", "Test1", "Antwort1", false),
    new Question("V", "Test1", "Antwort1", false),
    new Question("W", "Test1", "Antwort1", false),
    new Question("X", "Test1", "Antwort1", false),
    new Question("Y", "Test1", "Antwort1", false),
    new Question("Z", "Test1", "Antwort1", false),
  ];

  rightAnswersGiven = 0;
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
    console.log("Timer stopped: " + this.timer);
  }

  giveCorrectAnswer(question: Question, index: number) {
    question.answeredCorrectly = true;
    this.rightAnswersGiven = this.questionList.filter(q => q.answeredCorrectly).length;
    this.nextQuestionIndex = this.getNextQuestionIndex(index);

    // end game because every thing was right.
    if (this.rightAnswersGiven == this.questionList.length) {
      console.log("Game ended: timer stopped.");
      this.stopTimer();
    }
  }

  giveWrongAnswer(question: Question, index: number) {
    // determine if other player is eliminated
    // if no, stop time, switch component
    this.stopTimer();
    console.log("Wrong answer given. Other players turn.");

    // if yes, show next question
    this.nextQuestionIndex = this.getNextQuestionIndex(index);
    console.log("Wrong answer given. Other player eliminated. Still your turn.");
  }

  private getNextQuestionIndex(index: number): number {

    if (this.rightAnswersGiven == this.questionList.length) {
      return -1;
    }

    // next index available?
    let nextIndex = index + 1;

    // no : is it a run over?
    if (nextIndex >= this.questionList.length) {
      nextIndex = 0;
    }

    do {
      // no: add index once again.
      if (this.questionList[nextIndex].answeredCorrectly) {
        nextIndex++;
      }

      // no : is it a run over?
      if (nextIndex >= this.questionList.length) {
        nextIndex = 0;
      }

    } while (this.questionList[nextIndex].answeredCorrectly)

    return nextIndex;
  }
}

export class Question {

  public letter: string;
  public question: string;
  public answer: string;
  public answeredCorrectly: boolean;

  constructor(letter: string, question: string, answer: string, answeredCorrectly: boolean) {
    this.letter = letter;
    this.question = question;
    this.answer = answer;
    this.answeredCorrectly = answeredCorrectly;
  }
}
