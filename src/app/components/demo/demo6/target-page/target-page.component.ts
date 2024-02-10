import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-target-page',
  templateUrl: './target-page.component.html',
  styleUrl: './target-page.component.scss'
})
export class TargetPageComponent {
  cate?: string[];
  constructor(private _activtedroute: ActivatedRoute){

   this.cate = this._activtedroute.snapshot.queryParamMap.getAll('categorie')
  }

  getCategorie(){
   console.log(this.cate);
   
    
  }
}
