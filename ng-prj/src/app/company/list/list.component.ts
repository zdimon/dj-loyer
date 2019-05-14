import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompanyService } from '../company.service';
import { PagerService } from '../../pager/pager.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Input() hide_list: boolean;
  @Output() isNewItem = new EventEmitter<boolean>();

  items: any;
  total: number;
  perPage: number = 30;
  currentPage: number = 1;

  busy: Subscription;

  constructor(private service: CompanyService, private pager: PagerService) { }

  ngOnInit() {

    // pager
    this.pager.subscriber$.subscribe((page: number) => {
        this.setPage(page);
    });

    // list updater
    this.service.updateSubscriber$.subscribe(() => {
      this.setPage(this.currentPage);
    });

    this.setPage(1);
  }

  new(){
    this.service.showFormEvent(null);
  }

  show(item: any) {
    this.service.showItemEvent(item);
    console.log(item);
    window.scroll(0,0);
  }

  setPage(page: number) {
    this.currentPage = page;
    this.busy = this.service.getCompanyList((page - 1) * this.perPage, this.perPage).subscribe(
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
  ngOnDestroy() {
    this.busy.unsubscribe();
  }

}
