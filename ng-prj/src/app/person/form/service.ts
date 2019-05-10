
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../../global';
import { AlertService } from '../../directives/alert.service';
import { Person } from '../model';
import { PersonEventService } from '../event.service';


@Injectable()
export class PersonService {


  constructor(private http: HttpClient,private alert: AlertService, private event_service: PersonEventService) {}
  doSavePerson(person: Person) {
    if(person.id === undefined){
      return this.http.post(API_URL+'api/persons/',person).subscribe(res =>{
        this.alert.success('Персона создана.');
        this.event_service.showListEvent(true);
        this.event_service.updateListEvent();
      },() => {alert('Error')});
    } else {
      return this.http.put(API_URL+'api/persons/'+person.id+'/',person).subscribe(res =>{
        this.alert.success('Персона сохранена.');
        this.event_service.showListEvent(true);
        this.event_service.updateListEvent();
      },() => {alert('Error')});
    }

  }

  getRoles(){
    return this.http.get(`${API_URL}api/role/`)
  }

}
