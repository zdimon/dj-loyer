import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager/pager.component';
import { PagerService } from './pager/pager.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagerComponent
  ],
  providers: [
    PagerService
  ],
  declarations: [ PagerComponent ],
})
export class SharedModule { }
