import { Component, OnInit, Input } from '@angular/core';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.sass']
})
export class ShowComponent implements OnInit {

  //@Input() item: any;
  item: any;

  constructor(private company_service: CompanyService) { }

  ngOnInit() {
    this.company_service.showSubscriber$.subscribe((item: any) => {
      this.item = item;
    })
  }

  edit(item: any){
    this.company_service.showFormEvent(item);
  }

  delete(id: number){
    if(confirm("Вы уверены?")) {
      this.company_service.deleteCompany(id).subscribe(() =>{
        this.company_service.showListEvent(true);
        this.company_service.updateListEvent();
      }, () => alert('Error deleting company'));
    }
  }

  toList(){
    this.company_service.showListEvent(true);
  }

}
