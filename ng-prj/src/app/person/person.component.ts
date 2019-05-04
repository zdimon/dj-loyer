import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  item: any;
  constructor() { }

  ngOnInit() {
  }

  select(event: any){
    this.item = event;
  }

}
