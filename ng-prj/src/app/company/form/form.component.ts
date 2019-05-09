import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Input() item: Company;
  @Output() showList = new EventEmitter<boolean>();


  companyForm = new FormGroup({
    name_ru: new FormControl('ru'),
    name_kz: new FormControl('kz'),
  })


  constructor() { }

  ngOnInit() {
  }

  list(){
    this.item = null;
    this.showList.emit(true);
  }

  onSubmit(){
    console.warn(this.companyForm.value);
    console.log('ddddd');
  }
}
