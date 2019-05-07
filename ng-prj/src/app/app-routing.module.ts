import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';
import { RegistrationComponent } from './registration/registration.component';
import { GuardService } from './login/guard.service';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'persons', component: PersonComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'documents', component: DocumentComponent},
  //{ path: 'documents', component: DocumentComponent, canActivate: [GuardService] },
  { path: '',
  redirectTo: '/index',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
