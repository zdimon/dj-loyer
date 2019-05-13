import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../model';
import { PersonService } from './service';
import { PersonEventService } from '../event.service';


@Component({
  selector: 'person-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  //@Input() person: Person;


  submitted = true;
  roles: [];
  private _person: Person;

  get person(): Person {
    return this._person;
  }
  @Input()
  set person(person: Person){
    this._person = person;
    this.submitted = false;
  }



  constructor(private http: PersonService, private event_service: PersonEventService) {}

  ngOnInit() {
    this.http.getRoles().subscribe((data: any) => {
      this.roles = data;
    });
    this.person = new Person();
    this.event_service.formSubscriber$.subscribe((item: any) => {
      if(item == null) {
        this.person = new Person();
      } else {
        this.person = item;
      }
    })
  }

  clear() {
    this.person = new Person();
  }

  toList(){
    this.event_service.showListEvent(true);
  }

  onSubmit(){
    this.submitted = true;
    this.savePerson(this.person);
  }

  savePerson(person: Person) {
    this.http.doSavePerson(person);
  }

}
