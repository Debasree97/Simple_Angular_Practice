import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private FB: FormBuilder) {}
  currencyForm = this.FB.group({
    countryName: [''],
    currencyName: [''],
    currencyCode: [''],
    activeStat: [''],
  });

  activeStatus: string = 'Inactive';
  coName: string = "";
  cuName: string = "";
  cuCode: string = "";
  status: string = "";

  onSubmit() {
    // console.log(this.currencyForm.value);
    // console.log(this.currencyForm.value.countryName);
    this.coName = this.currencyForm.value.countryName;
    this.cuName = this.currencyForm.value.currencyName;
    this.cuCode = this.currencyForm.value.currencyCode;
    this.status = this.currencyForm.value.activeStat;
    this.currencyForm.reset();
  }
}
