import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.sass']
})
export class DocumentComponent implements OnInit {

  items: any;
  count: number;
  next: string;
  prev: string;
  offset: number = 0;

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

      this.getPage(this.offset);

  }

}
