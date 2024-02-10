import { Injectable, OnInit } from '@angular/core';
import { Group, groupList } from '../components/exos/exo3/group.model'
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private _groupList: Group[] = groupList;
  
  getGroup() : Group[] {
    return this._groupList
  }

  addGroup(group: Group) {
    this._groupList.push(group);
  }
}
