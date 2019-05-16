import { Component, OnInit } from '@angular/core';
import { PersonEventService } from '../event.service';
import { Person } from '../model';
import { HttpService } from '../../http.service';
import { API_URL } from '../../global';

@Component({
  selector: 'app-person-analize',
  templateUrl: './analize.component.html',
  styleUrls: ['./analize.component.sass']
})
export class AnalizeComponent implements OnInit {

  person: Person;
  namesakes: Person[];
  companies: any;

  constructor(private event_service: PersonEventService, private http: HttpService) { }

  ngOnInit() {
    this.event_service.analizeSubscriber$.subscribe((person: Person) => {
      this.person = person;
      this.http.get(`${API_URL}api/namesake_search/${this.person.surname_ru}`).subscribe((data) => {
        this.namesakes = data.results;
        console.log(this.namesakes);
      });

      this.http.get(`${API_URL}api/company_search/${this.person.id}`).subscribe((data) => {
        this.companies = data.results;
        console.log(this.companies);
      });


    });

  }

  toList(){
    this.event_service.showListEvent(true);
  }

  doEdit(){
    this.event_service.showFormEvent(this.person);
  }

}
