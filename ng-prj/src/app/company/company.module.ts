import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { SharedModule } from '../shared.module';
import {BusyModule} from 'angular2-busy';



@NgModule({
  declarations: [CompanyComponent, FormComponent, ListComponent, ShowComponent],
  imports: [
    CommonModule,
    SharedModule,
    BusyModule
  ]
})
export class CompanyModule { }
