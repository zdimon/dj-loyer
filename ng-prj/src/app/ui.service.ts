import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  _db : any;

  constructor() {
    this._db = {
      menu: {
        document: { is_active: false },
        person: { is_active: false },
        company: { is_active: false }
      }
    };
   }

   get menu(){
     return this._db.menu;
   };

   activate(menu: string){
    this.deactivateAll();
    this._db.menu[menu]['is_active'] = true;
   };

   deactivateAll(){
      for (let key in this._db.menu) {
        this._db.menu[key].is_active = false;
      }
   }

}
