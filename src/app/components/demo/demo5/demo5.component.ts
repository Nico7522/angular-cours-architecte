import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrl: './demo5.component.scss'
})
export class Demo5Component {
  categorieList = [
    "chaton",
    "waouf",
    "meuh",
    "beeh"
  ]
  constructor(private _router: Router){}

  redirection() {
    this._router.navigate(["/demo/target"], {queryParams: {categorie: this.categorieList}})
  }
}
