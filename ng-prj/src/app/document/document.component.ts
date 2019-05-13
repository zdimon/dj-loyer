import { Component, OnInit } from '@angular/core';
import { UiService } from '../ui.service'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.sass']
})
export class DocumentComponent implements OnInit {

  constructor(private ui_service: UiService) { }

  ngOnInit() {
    this.ui_service.activate('document');
  }

}
