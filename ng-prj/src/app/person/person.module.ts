import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { PersonService } from './form/service';

@NgModule({
  declarations: [PersonComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    PersonService
  ]
})
export class PersonModule { }
