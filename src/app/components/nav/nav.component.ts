import { Component } from '@angular/core';
import { NavLink } from './Navlink.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  links : NavLink[] = [
    {title : "Home", url : "home"},
    {title : "About", url : "about"},
    {title : "Mes démos", url: 'demo', isChildrenVisible: false, children : [
      {title : "Typescript", url : "demo/demo1"},
      {title : "Bindings", url : "demo/demo2"},
      {title : "Pipe", url : "demo/demo3"},
      {title : "Structural directive", url : "demo/demo4"},
      {title : "Routing", url : "demo/demo5"},
      {title : "target", url : "demo/target"},
      {title : "Service et injection", url : "demo/demo6"},
      {title : "Formulaire", url : "demo/demo7"},




    ]},
    {title : "Exercices", url: 'exo', isChildrenVisible: false, children : [
      {title : "Chrono", url : "exo/exo1"},
      {title : "Formulaire", url : "exo/exo2"},
      {title : "Groupes", url : "exo/exo3/group"},
      {title : "Créer un groupe", url : "exo/exo3/create/group"},



    ]}
  ]
}
