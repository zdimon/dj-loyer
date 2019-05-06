import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model';
import { PersonService } from './service';

@Component({
  selector: 'person-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  //@Input() person: Person;


  submitted = true;
  private _person: Person;

  get person(): Person {
    return this._person;
  }
  @Input()
  set person(person: Person){
    this._person = person;
    this.submitted = false;
  }

  roles = [
    {value: 'judge', name: 'Судья'},
    {value: 'plantiff', name: 'Ответчик' }
  ];

  constructor(private http: PersonService) {}

  ngOnInit() {
    this.person = new Person();
  }

  clear() {
    this.person = new Person();
  }

  onSubmit(){
    this.submitted = true;
    this.savePerson(this.person);
  }

  savePerson(person: Person) {
    this.http.doSavePerson(person);
  }

}
