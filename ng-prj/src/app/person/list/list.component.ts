import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../model';
//import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../global';
import { PersonService } from '../form/service';
import { PagerService } from '../../pager/pager.service';
import { PersonEventService } from '../event.service';
import { HttpService as HttpClient} from '../../http.service';
import { map } from 'rxjs/operators';

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
  isPagerHidden: boolean = false;
  ////

  // Search
  isSearch: boolean = false;




  onSelect(item: any){
    this.event_service.showFormEvent(item);
    window.scroll(0,0);
  }

  persons: Person[];
  roles: [];

  constructor(private http: HttpClient, private ps: PersonService, private pager: PagerService,
    private event_service: PersonEventService) { }

  onEdit(person: Person){
    person.is_edit = true;
  }

  inlineSave(person: Person){
    person.is_edit = false;
    this.ps.doSavePerson(person);
  }

  exit(person: Person){
    person.is_edit = false;
  }

  ngOnInit() {
    this.getPersonList(this.currentPage);
    this.ps.getRoles().subscribe((data: any) => {
      this.roles = data;
    });
    //pager
    this.pager.subscriber$.subscribe((page: number) => {
      this.persons = [];
      this.getPersonList(page);
      this.isPagerHidden = false;
    });
    // updater
    this.event_service.updateSubscriber$.subscribe(() => {
      this.getPersonList(this.currentPage);
    });
    //search
    this.event_service.searchSubscriber$.subscribe((data: any) => {
      //this.isPagerHidden = true;
      if(data.action=='clear'){
        this.isSearch = false;
      } else {
        this.search(data);
        this.isSearch = true;
      }
    });
  }

  new(){
    this.event_service.showFormEvent(null);
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

  getPersonList(page: number) {
    this.currentPage = page;
    let offset = (this.currentPage-1)*this.perPage;
    if(this.isSearch){
      this.event_service.searchEvent({'action': 'remote_search'});
    } else {
      this.http.get(API_URL+'api/persons?limit='+this.perPage+'&offset='+offset)
        .pipe(map((item) => {
          for(let k in item.results){
            item.results[k].is_edit = false;
          }
          return item;
        }))
        .subscribe((res: any) =>{
        this.persons = res.results;
        this.total = res.count;
      });
    }
  }

  search(data: any) {
    let offset = (this.currentPage-1)*this.perPage;
    return this.http.get(`${API_URL}api/person_search/${data.fio}/${data.role}/${data.birth}?limit=${this.perPage}&offset=${offset}`).subscribe((res: any) => {
      this.persons = res.results;
      this.total = res.count;
    });
  }

}
