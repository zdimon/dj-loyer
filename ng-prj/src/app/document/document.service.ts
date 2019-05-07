import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../global';

import {BehaviorSubject, Subject} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _search_emmiter = new Subject();
  search_subscriber$ = this._search_emmiter.asObservable();
  private _clear_search_emmiter = new Subject();
  clear_search_subscriber$ = this._clear_search_emmiter.asObservable();

  fireSearchEvent(key: string){
    this._search_emmiter.next(key);
  }

  clearSearchEvent(){
    this._clear_search_emmiter.next();
  }

  constructor(private http: HttpClient) { }

  getDocList(offset: number) {
    return this.http.get(API_URL + 'api/documents?limit=10&offset='+offset);
  }

  getSearchDocList(offset: number, key: string) {
    return this.http.get(API_URL + 'api/documents_search/' + key + '?limit=10&offset=' + offset);
  }

}
