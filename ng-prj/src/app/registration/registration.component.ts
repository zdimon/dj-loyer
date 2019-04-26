import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { AlertService } from '../directives/alert.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {


  userdata: any = {
    "email": '',
    "username": '',
    "password": '',
    "repeatpassword": ''
   };

  constructor(
      private http: RegistrationService,
      private alert: AlertService,
      private router: Router
      ) { }

  ngOnInit() {
  }

  register() {

    this.http.save(this.userdata).subscribe((res: any) => {
      this.router.navigate(['/login']);
      if(res.status==0){
        this.alert.success(res.message);
      } else {
        this.alert.error(res.message);
      }
    });

  }

}
