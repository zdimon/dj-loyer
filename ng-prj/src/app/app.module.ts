import { CompanyModule } from './company/company.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DocumentService } from './document/document.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';
import { LoginService } from './login/login.service';
import { AlertComponent } from './directives/alert/alert.component';
import { PersonModule } from './person/person.module';
import { DocumentModule } from './document/document.module';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegistrationModule,
    PersonModule,
    DocumentModule,
    CompanyModule,
    SharedModule,
    NgbModule.forRoot()
  ],
  providers: [
    DocumentService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
