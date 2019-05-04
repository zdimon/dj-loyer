import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model';

@Component({
  selector: 'person-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.person);
  }

}
