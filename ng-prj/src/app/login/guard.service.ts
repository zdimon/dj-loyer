import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService } from '../directives/alert.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(
    private router: Router,
    private alert: AlertService
    ){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ){
      if (localStorage.getItem('is_auth')==='true') {
        return true;
      } else {

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        this.alert.error('Only for registered users!');
      }
    }
}
