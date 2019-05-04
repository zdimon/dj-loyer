import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from '../model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../global';

@Component({
  selector: 'person-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  @Output() onSelected = new EventEmitter();
  onSelect(item: any){
    this.onSelected.emit(item);
  }

  persons: Person[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPersonList();
    /*
    this.persons = [
      {
        id: 1,
        rawName: 'test',
        firstnameRu: 'test',
        lastnameRu: 'test',
        surnameRu: 'test',
        firstnameKz: 'test',
        lastnameKz: 'test',
        surnameKz: 'test',
        firstnameLat: 'test',
        lastnameLat: 'test',
        surnameLat: 'test',
        role: 'test'
      }
    ];
    */
  }

  getPersonList() {
    return this.http.get(API_URL+'api/persons?limit=10&offset=0').subscribe(res =>{
      this.persons = res.results;
    });
  }

}
