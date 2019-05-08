import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import { PagerService } from '../../pager/pager.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  items: any;
  total: number;
  perPage: number = 30;
  currentPage: number = 1;


  constructor(private service: CompanyService, private pager: PagerService) { }

  ngOnInit() {
    this.pager.subscriber$.subscribe((page: number) => {
        this.setPage(page);
    });
    this.setPage(1);
  }

  setPage(page: number) {
    this.currentPage = page;
    this.service.getCompanyList(page * this.perPage, this.perPage).subscribe(
      (res: any) => {
        this.items = res.results;
        this.total = res.count;
      }
    );
    // get pager object from service
    //this.pager = this.pagerService.getPager(this.items.length, page);
    //console.log(this.pager);
    // get current page of items
    //this.pagedItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
