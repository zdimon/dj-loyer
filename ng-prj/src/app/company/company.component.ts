import { Component, OnInit } from '@angular/core';
import { Company  } from './model';
import { CompanyService } from './company.service';
import { UiService } from '../ui.service'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

  item: Company;

  // Interface
  isListHidden: boolean = false;
  isShowHidden: boolean = true;
  isFormHidden: boolean = true;
  ////

  constructor(private company_service: CompanyService, private ui_service: UiService) { }

  ngOnInit() {
    this.ui_service.activate('company');
    // form
    this.company_service.formSubscriber$.subscribe(() => {
      this.isListHidden = true;
      this.isShowHidden = true;
      this.isFormHidden = false;
    });

    // list
    this.company_service.listSubscriber$.subscribe(() => {
      this.isListHidden = false;
      this.isShowHidden = true;
      this.isFormHidden = true;
    });

    //show
    this.company_service.showSubscriber$.subscribe((item) => {
      this.isListHidden = true;
      this.isShowHidden = false;
      this.isFormHidden = true;
    });

  }

  new(){
    this.item = new Company();
    this.isListHidden = true;
  }

  showList(){
    this.isListHidden = false;
  }

}
