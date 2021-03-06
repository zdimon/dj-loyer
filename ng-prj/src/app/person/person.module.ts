import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { PersonService } from './form/service';
import { SharedModule } from '../shared.module';
import { SearchComponent } from './search/search.component';
import { AnalizeComponent } from './analize/analize.component';



@NgModule({
  declarations: [PersonComponent, ListComponent, FormComponent, SearchComponent, AnalizeComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
