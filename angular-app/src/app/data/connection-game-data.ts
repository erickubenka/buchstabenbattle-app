import {Connection} from "./connection";

export class ConnectionGameData {

  public isStarted: boolean = false;
  public timer: number = 0;
  public points: number = 0;
  public connections: Connection[] = [];
  public answerStart: Connection[] = [];
  public answerEnd: Connection[] = [];
  public questionIndex: number = 0;
}
