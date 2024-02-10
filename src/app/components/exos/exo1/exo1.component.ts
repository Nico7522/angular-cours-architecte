import { Component } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {
  minute: number = 0;
  seconde: number = 0;
  interval?: NodeJS.Timeout
  isStopped: boolean = false
  timerDisplay: string = "Timer stoppé";
  start() {
    this.interval = setInterval(() => {
      if(this.seconde === 60) {
        this.seconde = 0;
        this.minute++;
        this.timerDisplay = `${this.minute} minute(s) ${this.seconde} seconde(s)`

      }
      this.seconde++;
      this.timerDisplay = `${this.minute} minute(s) ${this.seconde} seconde(s)`
    }, 1000)

  }

  stop() {
    if(this.isStopped === false) {
      this.isStopped = true;
      clearInterval(this.interval)
    } else {
      this.isStopped = false
      this.start()
    }
 
  }
  
  reset() {
    clearInterval(this.interval)
    this.minute = 0;
    this.seconde = 0
    this.timerDisplay = "Timer stoppé"
    this.isStopped = false;


  }
}
