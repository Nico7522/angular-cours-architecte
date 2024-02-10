import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrl: './demo4.component.scss'
})
export class Demo4Component {
  isVisible: boolean = false;
  switchValue!: number;
  myList: string[] = ["Jean", "Leo", "Marc", "Pierre"]

  switchVisible(){
    this.isVisible = !this.isVisible;

  }
}
