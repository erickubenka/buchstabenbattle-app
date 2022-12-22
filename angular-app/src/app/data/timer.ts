export class Timer {

  time: number = 90;
  isStarted: boolean = false;

  private timerInterval: any;
  private callback: any;

  static create(time: number, callback: any): Timer {
    let timer = new Timer();

    timer.time = 90;
    timer.callback = callback;
    return timer;
  }

  constructor() {
  }

  start() {
    this.isStarted = true;
    this.timerInterval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time <= 0) {
        this.stop()
      }
      this.callback();
    }, 1000);
  }

  stop() {
    this.isStarted = false;
    clearInterval(this.timerInterval);
    this.callback();
  }

}

