import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../db.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  is_auth: string;
  constructor(private db: DbService) { }

  ngOnInit() {
    //this.is_auth = this.db.getIsLogin();
    this.db.subscriber$.subscribe(data => {
      this.is_auth = data;
    })
  }

  logout() {
    this.db.setIsLogin('false');
  }

}
