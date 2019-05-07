import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  search_key: string;
  search: boolean;

  constructor(private doc_service: DocumentService) { }

  ngOnInit() {
    this.search = false;
  }

  clear(){
    this.search = false;
    this.search_key = '';
    this.doc_service.clearSearchEvent();
  }

  SearchSubmit(){
    this.doc_service.fireSearchEvent(this.search_key);
    this.search = true;
  }

}
