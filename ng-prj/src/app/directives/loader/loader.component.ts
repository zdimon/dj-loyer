import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService  } from '../../http.service';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  is_loading: boolean = false;
  message: string = 'init';
  
  private load_subscription: Subscription;
  private done_subscription: Subscription;
  private error_subscription: Subscription;
  constructor( private _http_service: HttpService ) { }

  ngOnInit() {
    this.load_subscription = this._http_service.httpLoadSubscriber$.subscribe(() => {
      this.message = 'Подождите...';
      this.is_loading = true;
      console.log(this.message);
    });
    this.done_subscription = this._http_service.httpDoneSubscriber$.subscribe(() => {
      this.is_loading = false;
      this.message = 'Завершена!';
      console.log(this.message);
    });
    this.error_subscription = this._http_service.httpErrorSubscriber$.subscribe(() => {
      this.message = 'Ошибка загрузки!';
      this.is_loading = false;
    });       

  }

  ngOnDestroy() {
    //this.load_subscription.unsubscribe();
    //this.done_subscription.unsubscribe();
    //this.error_subscription.unsubscribe();
  }  

}
