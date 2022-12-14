export class Connection {

  question: string = "";
  answerStart: string = "";
  answerEnd: string = "";

  isAnswered: boolean = false;
  isAnsweredCorrectly: boolean = false;

  constructor(question: string, answerStart: string, answerEnd: string) {
    this.question = question;
    this.answerStart = answerStart;
    this.answerEnd = answerEnd;
  }
}
