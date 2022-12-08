import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})

export class WheelComponent {

  @Input() name: string = "";

  questionList = [
    new Question("A", "Frage1", "Antwort1", false, false),
    new Question("B", "Frage1", "Antwort1", false, false),
    new Question("C", "Frage1", "Antwort1", false, false),
    new Question("D", "Frage1", "Antwort1", false, false),
    new Question("E", "Frage1", "Antwort1", false, false),
    new Question("F", "Frage1", "Antwort1", false, false),
    new Question("G", "Frage1", "Antwort1", false, false),
    new Question("H", "Frage1", "Antwort1", false, false),
    new Question("I", "Frage1", "Antwort1", false, false),
    new Question("J", "Frage1", "Antwort1", false, false),
    new Question("K", "Frage1", "Antwort1", false, false),
    new Question("L", "Frage1", "Antwort1", false, false),
    new Question("M", "Frage1", "Antwort1", false, false),
    new Question("N", "Frage1", "Antwort1", false, false),
    new Question("O", "Frage1", "Antwort1", false, false),
    new Question("P", "Frage1", "Antwort1", false, false),
    new Question("Q", "Frage1", "Antwort1", false, false),
    new Question("R", "Frage1", "Antwort1", false, false),
    new Question("S", "Frage1", "Antwort1", false, false),
    new Question("T", "Frage1", "Antwort1", false, false),
    new Question("U", "Frage1", "Antwort1", false, false),
    new Question("V", "Frage1", "Antwort1", false, false),
    new Question("W", "Frage1", "Antwort1", false, false),
    new Question("X", "Frage1", "Antwort1", false, false),
    new Question("Y", "Frage1", "Antwort1", false, false),
    new Question("Z", "Frage1", "Antwort1", false, false),
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
