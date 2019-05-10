import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertService } from '../alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {

    this.subscription = this.alertService.getMessage().subscribe(message => {
      this.message = message;
      setTimeout(()=>{
        this.message = null;
      },3000)
    });

  }

}
