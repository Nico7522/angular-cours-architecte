import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.scss'
})
export class Exo2Component implements OnInit {
   form! : FormGroup
   userMail! : string;
  constructor(private _formBuilder : FormBuilder) {

  }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      "Nom": [null, [Validators.required]],
      "Prenom": [null, [Validators.required]],
      "Email": [null, [Validators.required, Validators.email]],
      "Password": [null, [Validators.required]],
      "Categories": this._formBuilder.array([
        this._formBuilder.control('', Validators.required)
      ])
    })
  }

  get Categories(){
    return this.form.get('Categories') as FormArray;
  }

  addCategorie(){
    this.Categories.push(this._formBuilder.control('', Validators.required))
  }

  removeCategorie(id: number){
    this.Categories.removeAt(id);
  }

  handleSubmit() {
    if(this.form.valid) {
      this.userMail = `Bienvenue ${this.form.controls["Email"].value}` 
      console.log(this.form);
      
    } 
  }
}
