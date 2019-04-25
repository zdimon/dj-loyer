import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent{
  title = 'ng-prj';
  is_auth: string;

  constructor() {
    this.is_auth = localStorage.getItem('is_auth');

  }

  changeTitle(){
    this.title = 'New title'
  }

}
