import { Component, OnInit } from '@angular/core';
import { PersonEventService } from './event.service';
import { UiService } from '../ui.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {

  // Interface
  isListHidden: boolean = false;
  isFormHidden: boolean = true;
  isSearchHidden: boolean = false;


  constructor(private event_service: PersonEventService, private ui_service: UiService) { }

  ngOnInit() {

    this.ui_service.activate('person');

    this.event_service.formSubscriber$.subscribe(() => {
      this.isFormHidden = false;
      this.isListHidden = true;
      this.isSearchHidden = true;
    });

    this.event_service.listSubscriber$.subscribe(() => {
      this.isFormHidden = true;
      this.isListHidden = false;
      this.isSearchHidden = false;
    });



  }


}
