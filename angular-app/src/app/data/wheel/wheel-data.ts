import {Question} from "./question";
import {Timer} from "../timer";
import {QuestionSet} from "./question-set";

export class WheelData {
  questionSet: QuestionSet = new QuestionSet();

  answersGivenCorrectly = 0;
  answersGiven = 0;
  questionIndex = 0;
  timer: Timer;

  constructor(timeInSeconds: number) {
    this.timer = Timer.create(timeInSeconds, () => {
    });
  }

  start() {
    this.timer.start();
  }

  stop() {
    this.timer.stop();
  }

  giveCorrectAnswer(question: Question, index: number) {
    question.isAnswered = true;
    question.isAnsweredCorrectly = true;
    this.answersGiven = this.questionSet.questionList.filter(q => q.isAnswered).length;
    this.answersGivenCorrectly = this.questionSet.questionList.filter(q => q.isAnswered && q.isAnsweredCorrectly).length;

    this.questionIndex = this.getNextQuestionIndex(index);

    if (this.answersGiven == this.questionSet.questionList.length) {
      this.stop();
    }
  }

  giveWrongAnswer(question: Question, index: number) {

    question.isAnswered = true;
    question.isAnsweredCorrectly = false;
    this.answersGiven = this.questionSet.questionList.filter(q => q.isAnswered).length;
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
    if (this.answersGiven == this.questionSet.questionList.length) {
      return -1;
    }

    let nextIndex = index + 1;

    if (nextIndex >= this.questionSet.questionList.length) {
      nextIndex = 0;
    }

    do {
      if (this.questionSet.questionList[nextIndex].isAnswered) {
        nextIndex++;
      }

      if (nextIndex >= this.questionSet.questionList.length) {
        nextIndex = 0;
      }

    } while (this.questionSet.questionList[nextIndex].isAnswered)

    return nextIndex;
  }
}
