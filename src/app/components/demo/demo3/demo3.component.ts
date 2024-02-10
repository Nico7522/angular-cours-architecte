import { Component } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrl: './demo3.component.scss'
})
export class Demo3Component {
  myString: string = "saluT tout le MoNde"
  myNumber: number = 15.4444444
  myDate: Date = new Date()
  eur: number = 555555555
}
