import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { FormComponent } from './form/form.component';
import { DocumentComponent } from './document.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ListComponent,
    ShowComponent,
    DocumentComponent,
    FormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DocumentModule { }
