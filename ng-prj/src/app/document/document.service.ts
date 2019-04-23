import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../global';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  getDocList(offset: number) {
    return this.http.get(API_URL+'api/documents?limit=10&offset='+offset);
  }

}
