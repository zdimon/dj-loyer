import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Person } from '../../person/model';
import { PagerService } from '../../pager/pager.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  items: any;
  search: boolean;
  search_key: string;

  busy: Subscription;
  // pager
  currentPage: number = 1;
  perPage: number = 30;
  total: number;
  ////

  constructor(private http_service: DocumentService, private pager: PagerService) { }

  getPage(page: number) {
    this.currentPage = page;
    this.busy = this.http_service.getDocList(page, this.perPage).subscribe((data: any) => {
      this.items = data['results'];
      this.total = data['count'];
    })
  }

  ngOnInit() {

      this.search = false;

      this.getPage(this.currentPage);
      this.pager.subscriber$.subscribe((page: number) => {
        this.getPage(page);
      });


      this.http_service.clear_search_subscriber$.subscribe(() => {
        this.search = false;
        this.getPage(this.currentPage);
      });
      this.http_service.search_subscriber$.subscribe((key: string) => {
        this.http_service.getSearchDocList(this.currentPage,key).subscribe((res: any) => {
          this.items = res.results;
          this.total = res.count;
          this.search = true;
          this.search_key = key;
        })
      });
  }

  ngOnDestroy() {
    this.busy.unsubscribe();
  }

}
