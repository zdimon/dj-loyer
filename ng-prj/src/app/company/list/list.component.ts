import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';


@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  items: any;

  constructor(private service: CompanyService) { }

  ngOnInit() {
    this.service.getCompanyList(10,10).subscribe(
      (res: any) => {
        this.items = res.results;
        this.setPage(1);
      }
    );

  }

  setPage(page: number) {
    // get pager object from service
    //this.pager = this.pagerService.getPager(this.items.length, page);
    //console.log(this.pager);
    // get current page of items
    //this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
