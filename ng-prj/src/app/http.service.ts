import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'
import {Subject} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private _http_load_emmiter = new Subject();
  httpLoadSubscriber$ = this._http_load_emmiter.asObservable();

  private _http_done_emmiter = new Subject();
  httpDoneSubscriber$ = this._http_done_emmiter.asObservable();

  private _http_error_emmiter = new Subject();
  httpErrorSubscriber$ = this._http_error_emmiter.asObservable();

  constructor(private _http: HttpClient) { }

  get(url: string): Observable<any> {
    this._http_load_emmiter.next();
    return this._http.get(url)
                .do((res: Response) => {

                }, (error: any) => {
                  this._http_error_emmiter.next();
                })
                .finally(() => {
                  this._http_done_emmiter.next();
                });
  };

  delete(url: string): Observable<any> {
    this._http_load_emmiter.next();
    return this._http.get(url)
                .do((res: Response) => {
                }, (error: any) => {
                  this._http_error_emmiter.next();
                })
                .finally(() => {
                  this._http_done_emmiter.next();
                });
  };

}
