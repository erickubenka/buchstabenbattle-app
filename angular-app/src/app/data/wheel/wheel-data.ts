import {Question} from "./question";
import {Timer} from "../timer";

export class WheelData {

  questionList: Question[] = [];
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

  giveCorrectAnswer(question: Question, index: number) {
    question.isAnswered = true;
    question.isAnsweredCorrectly = true;
    this.answersGiven = this.questionList.filter(q => q.isAnswered).length;
    this.answersGivenCorrectly = this.questionList.filter(q => q.isAnswered && q.isAnsweredCorrectly).length;

    this.questionIndex = this.getNextQuestionIndex(index);

    if (this.answersGiven == this.questionList.length) {
      this.stop();
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
