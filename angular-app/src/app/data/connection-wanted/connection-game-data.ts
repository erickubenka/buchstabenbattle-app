import {Connection} from "./connection";
import {Timer} from "../timer";
import {ConnectionSet} from "./connection-set";

export class ConnectionGameData {

  public timer: Timer = new Timer();

  public points: number = 0;
  public connectionSet: ConnectionSet = new ConnectionSet();
  public answerStart: Connection[] = [];
  public answerEnd: Connection[] = [];
  public questionIndex: number = 0;
}
