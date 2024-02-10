import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrl: './demo7.component.scss'
})
export class Demo7Component implements OnInit {

  myGroup!: FormGroup
  constructor(private _formBuilder : FormBuilder){

  }
  ngOnInit(): void {
    this.myGroup = this._formBuilder.group({
      "email": [null, [Validators.required, Validators.email]],
      "password": [null, [Validators.required, this.monValidator()]],
      "Pseudos" : this._formBuilder.array([

      ])
    })
  }

  getPseudos() : FormArray {
    return this.myGroup.get("Pseudos") as FormArray
  }

  addPseudo(){
    this.getPseudos().push(new FormControl(null, [Validators.required]));
  }

  removePseudo(index : number){
    this.getPseudos().removeAt(index)
  }

  handleSubmit() {
   console.log(this.myGroup);
   
    
  }

  monValidator() : ValidatorFn | null {
    return (control : AbstractControl) : ValidationErrors | null  => {
      
        if(control.value != null && control.value.length < 5) {
          return null
        }
        return {message: "invalid"}
    }
  }


}
