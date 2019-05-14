import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagerComponent } from './pager/pager.component';
import { PagerService } from './pager/pager.service';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { DateParserFormatter  } from './directives/date-formatter';
import { LoaderComponent } from './directives/loader/loader.component';
import {BusyModule} from 'angular2-busy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [ CommonModule, FormsModule],
  exports : [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagerComponent,
    LoaderComponent,
    NgbModule,
    BusyModule,
    BrowserAnimationsModule
  ],
  providers: [
    PagerService,
    {provide: NgbDateParserFormatter, useClass: DateParserFormatter}
  ],
  declarations: [ PagerComponent, LoaderComponent ],
})
export class SharedModule { }
