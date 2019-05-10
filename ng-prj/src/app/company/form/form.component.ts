import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from '../model';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../company.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-company-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {


  @Output() showList = new EventEmitter<boolean>();

  cities = [];

  companyForm = new FormGroup({
    id: new FormControl(),
    name_ru: new FormControl('',Validators.required),
    name_kz: new FormControl('',Validators.required),
    bin: new FormControl('',Validators.required),
    city_id: new FormControl('',Validators.required),
  })


  constructor(private company_service: CompanyService) { }

  ngOnInit() {
    this.company_service.getCities().subscribe((data: any) => {
      this.cities = data;
    });
    // editing
    this.company_service.formSubscriber$.subscribe((item: any) => {
        this.item = item;
        if(item !== null){
          this.fillForm(item);
        } else {
          this.companyForm.reset();
        }
    });
  }

  toList(){
    this.company_service.showListEvent(true);
  }

  fillForm(item: any){
    this.companyForm.patchValue({
      id: item.id,
      bin: item.bin,
      name_ru: item.name_ru,
      name_kz: item.name_kz
    });
    if(item.city) {
      this.companyForm.patchValue({city_id: item.city.id});
    }
  }

  onSubmit(){
    this.company_service.saveCompany(this.companyForm.value).subscribe((data) => {
      this.companyForm.reset();
      this.company_service.showListEvent(true);
      this.company_service.updateListEvent();
    }, () => { alert('Error!!!') });
  }
}
