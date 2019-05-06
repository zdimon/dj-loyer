import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../global';
import { PersonService } from '../form/service';

@Component({
  selector: 'person-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  current: number = 0;
  offset: number = 0;
  perpage: number = 30;
  count: number;
  next: string;
  prev: string;

  @Output() onSelected = new EventEmitter();
  onSelect(item: any){
    this.current = item.id;
    this.onSelected.emit(item);
    window.scroll(0,0);
  }

  persons: Person[];

  constructor(private http: HttpClient,private ps: PersonService) { }

  ngOnInit() {
    this.getPersonList(this.offset);
    this.ps.subscriber$.subscribe(() => {
      this.getPersonList(this.offset);
    });
  }

  delete(person: Person){
    if(confirm("Вы уверены?")) {
      return this.http.delete(API_URL+'api/persons/' + person.id + '/').subscribe((res: any) =>{
        this.getPersonList(this.offset);
      }, () => {
        alert('Error of deleting!');
      });
    }
  }

  getPersonList(offset: number) {
    return this.http.get(API_URL+'api/persons?limit='+this.perpage+'&offset='+offset).subscribe((res: any) =>{
      this.persons = res.results;
      this.count = res.count;
      this.next = res.next;
      this.prev = res.previous;
      this.offset = offset;
    });
  }

}
