import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";


@Injectable()
export class DbService {

  islogin: string;

  private _emmiter = new BehaviorSubject(null);
  subscriber$ = this._emmiter.asObservable();

  setIsLogin(value: string){
    this.islogin = value;
    this._emmiter.next(value)
  }

  getIsLogin(){
    return this.islogin;
  }

  constructor() {
    this.setIsLogin(localStorage.getItem('is_auth'));
  }

}
