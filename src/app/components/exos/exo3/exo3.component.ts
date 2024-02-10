import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../../service/group.service';
import { Group } from './group.model';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.scss'
})
export class Exo3Component implements OnInit {
  groupList: Group[] = [];
  constructor(private _groupService: GroupService){}
  ngOnInit(): void {
    this.groupList = this._groupService.getGroup();
  }
}
