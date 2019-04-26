import { Component, OnInit, Input } from '@angular/core';
import { DbService } from '../db.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  @Input() title: string;
  constructor(private db: DbService) { }

  ngOnInit() {

  }

  logout() {
    this.db.setIsLogin('false');
  }

}
