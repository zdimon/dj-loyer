import {BehaviorSubject} from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../../global';
import { AlertService } from '../../directives/alert.service';
import { Person } from '../model';

@Injectable()
export class PersonService {
  private _emmiter = new BehaviorSubject(null);
  subscriber$ = this._emmiter.asObservable();
  constructor(private http: HttpClient,private alert: AlertService) {}
  doSavePerson(person: Person) {
    if(person.id === undefined){
      return this.http.post(API_URL+'api/persons/',person).subscribe(res =>{
        this.alert.success('Персона создана.');
        this._emmiter.next('created');
      },() => {alert('Error')});
    } else {
      return this.http.put(API_URL+'api/persons/'+person.id+'/',person).subscribe(res =>{
        this.alert.success('Персона сохранена.');
      },() => {alert('Error')});
    }

  }

}
