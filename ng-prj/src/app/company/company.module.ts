import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [CompanyComponent, FormComponent, ListComponent, ShowComponent],
  imports: [
    CommonModule
  ]
})
export class CompanyModule { }
