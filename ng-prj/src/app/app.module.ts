import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';
import { DocumentService } from './document/document.service';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    IndexComponent,
    LoginComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegistrationModule,
    NgbModule.forRoot()
  ],
  providers: [ DocumentService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
