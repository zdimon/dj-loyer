import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PersonComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PersonModule { }
