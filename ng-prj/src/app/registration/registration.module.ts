import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration.component';
import { FormsModule }   from '@angular/forms';
import { DbService } from '../db.service';

@NgModule({
  declarations: [
    FormComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbService
  ]
})
export class RegistrationModule { }
