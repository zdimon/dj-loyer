import { Component, OnInit } from '@angular/core';
import { Company  } from './model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

  item: Company;
  hide_list: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  new(){
    this.item = new Company();
    this.hide_list = true;
  }

  showList(){
    this.hide_list = false;
  }

}
