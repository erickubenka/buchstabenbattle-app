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
