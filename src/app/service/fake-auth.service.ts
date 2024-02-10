import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeAuthService {

  isConnected! : boolean
  constructor() { }

  login(){
    this.isConnected = true
  }

  logout() {
    this.isConnected = false
  }

}
