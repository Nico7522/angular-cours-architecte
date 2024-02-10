import { Component } from '@angular/core';
import { Acteur, Film } from './Film.model';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.scss'
})
export class Demo1Component {
  nom: string = "n"
  age: number = 40
  date: Date = new Date()
  bool: boolean = true
  truc: any = {nom: "n", age: 40}
  bidule: undefined 
  myFilm: Film = new Film("Star Wars")
  myActor: Acteur = {nom: "toto", prenom: "toto2"}
  constructor(){
    this.test()
  }
  test() {
    console.log(this.truc.nom);
    
  }
}
