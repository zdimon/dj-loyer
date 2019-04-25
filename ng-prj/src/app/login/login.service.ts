import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../global';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: string, password: string) {
    var data = {'login': login, 'password': password};
    return this.http.post(API_URL+'api/login', data);
  }

}
