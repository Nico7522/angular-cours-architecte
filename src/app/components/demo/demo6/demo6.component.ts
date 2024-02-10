import { Component } from '@angular/core';
import { FakeAuthService } from '../../../service/fake-auth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrl: './demo6.component.scss'
})
export class Demo6Component {

  status! : boolean;
  constructor(private _authService: FakeAuthService){
    this.status = this._authService.isConnected;
  }

  login(){
    this._authService.login()
    this.status = this._authService.isConnected;

  }

  logout() {
    this._authService.logout()
    this.status = this._authService.isConnected;
  }
}
