import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager/pager.component';
import { PagerService } from './pager/pager.service';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports : [
    CommonModule,
    FormsModule,
    PagerComponent
  ],
  providers: [
    PagerService
  ],
  declarations: [ PagerComponent ],
})
export class SharedModule { }
