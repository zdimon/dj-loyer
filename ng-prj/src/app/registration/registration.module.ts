import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { RegistrationComponent } from './registration.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegistrationModule { }
