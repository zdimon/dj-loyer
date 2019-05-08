import { Component, OnInit, Input } from '@angular/core';
import { PagerService } from './pager.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit {

  @Input() total: any;
  @Input() perPage: number;
  @Input() currentPage: number;
  page_list: any;

  constructor(private pager_service: PagerService) { }

  ngOnInit() {
    this.page_list = this.generatePagesList();
  }

  generatePagesList(){
    let totalPages = Math.ceil(this.total / this.perPage);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
        if (this.currentPage <= 6) {
          startPage = 1;
          endPage = 10;
      } else if (this.currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
      } else {
          startPage = this.currentPage - 5;
          endPage = this.currentPage + 4;
      }
      let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
      return pages;
    }
  }

  setPage(page: number){
      this.pager_service.emmitPageEvent(page);
      this.currentPage = page;
      this.page_list = this.generatePagesList();
  }

}
