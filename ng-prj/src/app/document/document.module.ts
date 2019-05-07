import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { FormComponent } from './form/form.component';
import { DocumentComponent } from './document.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

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
    FormsModule
  ]
})
export class DocumentModule { }
