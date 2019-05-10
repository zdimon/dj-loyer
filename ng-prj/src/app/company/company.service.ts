import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../global';
import {Subject} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private _update_list_emmiter = new Subject();
  updateSubscriber$ = this._update_list_emmiter.asObservable();

  private _show_emmiter = new Subject();
  showSubscriber$ = this._show_emmiter.asObservable();

  private _form_emmiter = new Subject();
  formSubscriber$ = this._form_emmiter.asObservable();

  private _list_emmiter = new Subject();
  listSubscriber$ = this._list_emmiter.asObservable();

  constructor(private http: HttpClient) { }

  showListEvent(flag: boolean){
    this._list_emmiter.next(flag);
  }

  showItemEvent(item: any){
    this._show_emmiter.next(item);
  }

  showFormEvent(item: any){
    this._form_emmiter.next(item);
  }

  updateListEvent(){
    this._update_list_emmiter.next(true);
  }

  getCompanyList(offset: number, limit: number) {
    return this.http.get(API_URL + `api/company?limit=${limit}&offset=${offset}`);
  }

  deleteCompany(id: number){
    return this.http.delete(API_URL+'api/company/' + id + '/');
  }

  getCities(){
    return this.http.get(API_URL + `api/cities/`);
  }

  saveCompany(data: any){
    if(data.id === null){
      return this.http.post(API_URL + `api/company/`,data);
    } else {
       return this.http.put(API_URL + `api/company/${data.id}/`,data);
    }

  }

}
