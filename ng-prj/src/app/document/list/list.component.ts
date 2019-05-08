import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';
import { Person } from '../../person/model';


@Component({
  selector: 'app-document-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  items: any;
  count: number;
  next: string;
  prev: string;
  offset: number = 0;
  perpage: number = 30;
  search: boolean;
  search_key: string;

  constructor(private http_service: DocumentService) { }

  getPage(offset: number) {
    this.http_service.getDocList(offset).subscribe((data: any) => {
      this.items = data['results'];
      this.count = data['count'];
      this.next = data['next'];
      this.prev = data['previous'];
      this.offset = offset;
    })
  }

  ngOnInit() {

      this.search = false;
      this.getPage(this.offset);
      this.http_service.clear_search_subscriber$.subscribe(() => {
        this.search = false;
        this.getPage(this.offset);
      });
      this.http_service.search_subscriber$.subscribe((key: string) => {
        this.http_service.getSearchDocList(this.offset,key).subscribe((res: any) => {
          this.items = res.results;
          this.count = res.count;
          this.next = res.next;
          this.prev = res.previous;
          this.search = true;
          this.search_key = key;
        })
      });
  }

}
