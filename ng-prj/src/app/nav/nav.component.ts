import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../db.service';
import { AlertService } from '../directives/alert.service';
import { Router } from '@angular/router';
import { UiService } from '../ui.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  is_auth: string;
  menu: any;
  constructor(
              private db: DbService,
              private alert: AlertService,
              private router: Router,
              private ui: UiService
              ) { }

  ngOnInit() {
    this.is_auth = 'false';
    this.db.subscriber$.subscribe(data => {
      this.is_auth = data;
    })
    this.menu = this.ui.menu;
  }

  

  logout() {
    this.db.setIsLogin('false');
    localStorage.setItem('is_auth','false');
    this.router.navigate(['/index']);
    this.alert.success('Goodbye!')
  }

}
