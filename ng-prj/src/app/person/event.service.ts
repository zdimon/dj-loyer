import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Rx";
import { Person } from './model';

@Injectable({
  providedIn: 'root'
})
export class PersonEventService {

  private _update_list_emmiter = new Subject();
  updateSubscriber$ = this._update_list_emmiter.asObservable();

  private _form_emmiter = new Subject();
  formSubscriber$ = this._form_emmiter.asObservable();

  private _list_emmiter = new Subject();
  listSubscriber$ = this._list_emmiter.asObservable();

  private _search_emmiter = new Subject();
  searchSubscriber$ = this._search_emmiter.asObservable();

  private _analize_emmiter = new Subject();
  analizeSubscriber$ = this._analize_emmiter.asObservable();

  constructor() { }

  analizeEvent(person: Person){
    this._analize_emmiter.next(person);
  }

  showListEvent(flag: boolean){
    this._list_emmiter.next(flag);
  }

  showFormEvent(item: any){
    this._form_emmiter.next(item);
  }

  updateListEvent(){
    this._update_list_emmiter.next(true);
  }

  searchEvent(data: any){
    this._search_emmiter.next(data);
  }

}
