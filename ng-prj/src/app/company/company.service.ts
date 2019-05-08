import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


  getCompanyList(offset: number, limit: number) {
    return this.http.get(API_URL + `api/company?limit=${limit}&offset=${offset}`);
  }



}
