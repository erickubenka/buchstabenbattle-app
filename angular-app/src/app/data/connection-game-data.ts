import {Connection} from "./connection";
import {Timer} from "./timer";

export class ConnectionGameData {

  public timer: Timer = new Timer();

  public points: number = 0;
  public connections: Connection[] = [];
  public answerStart: Connection[] = [];
  public answerEnd: Connection[] = [];
  public questionIndex: number = 0;
}
