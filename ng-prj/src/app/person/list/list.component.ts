import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../global';
import { PersonService } from '../form/service';
import { PagerService } from '../../pager/pager.service';

@Component({
  selector: 'person-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  current: number = 0;
  // pager
  currentPage: number = 1;
  perPage: number = 30;
  total: number;
  ////

  @Output() onSelected = new EventEmitter();
  onSelect(item: any){
    this.current = item.id;
    this.onSelected.emit(item);
    window.scroll(0,0);
  }

  persons: Person[];

  constructor(private http: HttpClient, private ps: PersonService, private pager: PagerService) { }

  ngOnInit() {
    this.getPersonList(this.currentPage);
    this.pager.subscriber$.subscribe((page: number) => {
      this.getPersonList(page);
    });
  }

  delete(person: Person){
    if(confirm("Вы уверены?")) {
      return this.http.delete(API_URL+'api/persons/' + person.id + '/').subscribe((res: any) =>{
        this.getPersonList(this.currentPage);
      }, () => {
        alert('Error of deleting!');
      });
    }
  }

  getPersonList(currentPage: number) {
    let offset = currentPage*this.perPage;
    return this.http.get(API_URL+'api/persons?limit='+this.perPage+'&offset='+offset).subscribe((res: any) =>{
      this.persons = res.results;
      this.total = res.count;
    });
  }

}
