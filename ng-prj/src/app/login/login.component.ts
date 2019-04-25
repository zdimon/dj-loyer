import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { DbService } from '../db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  password: string;
  username: string;
  constructor(
              private http_service: LoginService,
              private router: Router,
              private db: DbService
              ) { }

  ngOnInit() {
  }

  login() {
      this.http_service.login(this.username, this.password).subscribe((data: any) => {
         console.log(data);
         if(data['status'] == 1) {
          alert(data['message']);


        } else {
          localStorage.setItem('is_auth', 'true');
          localStorage.setItem('user_token', data.token);
          this.db.setIsLogin('true');
          this.router.navigate(['/index'])
        }
      })
  }

}
