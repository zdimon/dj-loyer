import { Component, OnInit } from '@angular/core';
import { PersonEventService } from '../event.service';
import { PersonService } from '../form/service';


@Component({
  selector: 'app-person-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  fio: string;
  birth: any;
  role: number;
  roles: [];

  isClearButton: boolean = false;

  constructor(private event_service: PersonEventService, private http: PersonService) { }

  ngOnInit() {
    this.http.getRoles().subscribe((data: any) => {
      this.roles = data;
    });
    // remote search
    this.event_service.searchSubscriber$.subscribe((data: any) => {
      if(data.action === 'remote_search'){
        this.onSubmit();
      }
    });
  }

  onSubmit(){
    //console.log(this.birth);
    if(this.fio==='' && this.birth === undefined && this.role === undefined) {
      this.reset();
      this.isClearButton = false;
    } else {
      this.isClearButton = true;



      if(this.birth !== undefined) {
        let month = `0${this.birth.month}`.slice(-2);
        let day = `0${this.birth.day}`.slice(-2)
        //this.birth = `${this.birth.year}-${month}-${day}`;
        var date_birth = `${this.birth.year}-${month}-${day}`;
      }


     // console.log(this.birth);
      let data = {
        fio: this.fio !== '' ? this.fio : null,
        birth: date_birth,
        role: this.role !== undefined ? this.role : null,
        action: 'search'
      }
      this.event_service.searchEvent(data);
    }
  }

  reset(){
    this.event_service.searchEvent({action: 'clear'});
    this.event_service.updateListEvent();
    this.fio = '';
    this.birth = '';
    this.role = 0;
  }

}
