import { Component, OnInit } from '@angular/core';
import { PersonEventService } from './event.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  // Interface
  isListHidden: boolean = false;
  isFormHidden: boolean = true;

  constructor(private event_service: PersonEventService) { }

  ngOnInit() {

    this.event_service.formSubscriber$.subscribe(() => {
      this.isFormHidden = false;
      this.isListHidden = true;
    });

    this.event_service.listSubscriber$.subscribe(() => {
      this.isFormHidden = true;
      this.isListHidden = false;
    });

  }


}
