import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupService } from '../../../../service/group.service';
import { Artist, artistList, Group, Style, stylesList } from "../group.model"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrl: './create-group.component.scss'
})
export class CreateGroupComponent {
  

   formGroup!: FormGroup
  constructor(private _formBuilder: FormBuilder, private _groupService: GroupService, private _router: Router){
    this.formGroup = this._formBuilder.group({
      "name": ['', [Validators.required]],
      "creationDate": ['', [Validators.required]],
      "country": ['', [Validators.required]],
      "styles": this._formBuilder.array([
        this._formBuilder.control(this.getStyles()[0], Validators.required)
      ]),
      "artists": this._formBuilder.array([
        this._formBuilder.control(this.getArtists()[0], Validators.required)
      ])
    })
  }

  getArtists() : Artist[] {
    return artistList
  }

  getStyles() : Style[] {
    return stylesList
  }

  get styles() {
    return this.formGroup.get('styles') as FormArray
  }

  addStyle(){
    this.styles.push(this._formBuilder.control(this.getStyles()[0], Validators.required))
  }

  removeStyle(id: number){
    this.styles.removeAt(id);
  }
  get artists() {
    return this.formGroup.get('artists') as FormArray
  }

  addArtist(){
    this.artists.push(this._formBuilder.control(this.getArtists()[0], Validators.required))
  }

  removeArtist(id: number){
    this.artists.removeAt(id);
  }


  handleSubmit() {
    if(this.formGroup.valid) {
      const groupToAdd : Group = {
        name: this.formGroup.get('name')?.value,
        creationDate : this.formGroup.get('creationDate')?.value,
        pays : this.formGroup.get('country')?.value,
        artistes : this.formGroup.get('artists')?.value,
        styles : this.formGroup.get('styles')?.value,
      }
      this._groupService.addGroup(groupToAdd)
      this._router.navigate(["/exo/exo3/group"])
    }
    
  }

  isDirty() : boolean {
    return this.formGroup.valid
  }

  showDialog = false;
  subject = new Subject<boolean>();

  ngOnInit(): void {}
  onSelection($event: any) {
    console.log("coucou");
    
    console.log($event);
    this.showDialog = false;
    if ($event === 'ok') {
      this.subject.next(true);
    } else {
      this.subject.next(false);
    }
  }
  openDialog() {
    console.log('opn dialog');
    this.showDialog = true;
  }
}
