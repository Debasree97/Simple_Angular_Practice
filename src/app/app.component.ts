import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CurrencyModel } from './app.model';
import { ApiService } from '../app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currencyModel: CurrencyModel = new CurrencyModel();
  currencyForm!: FormGroup;
  currencyData!: any;
  constructor(private FB: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.currencyForm = this.FB.group({
      countryName: [''],
      currencyName: [''],
      currencyCode: [''],
      activeFlag: [''],
    });

    this.currencyData();
  }

  addCurrency() {
    console.log(this.currencyForm.value);
    this.currencyModel.countryName = this.currencyForm.value.countryName;
    this.currencyModel.currencyName = this.currencyForm.value.currencyName;
    this.currencyModel.currencyCode = this.currencyForm.value.currencyCode;
    this.currencyModel.activeFlag = this.currencyForm.value.activeFlag;
    this.api.currencyCurd(this.currencyModel).subscribe({
      next: (res) => {
        alert('Product has been added successfully!');
        console.log(res);
        this.currencyForm.reset();
      },
      error: (err) => {
        alert(err);
      },
    });
  }


  getCurrencyInfo()
  {
    this.api.getCurrencyDataShow().subscribe({
      next: (res) => {
        this.currencyData = res;
        console.log(res);
      },
      error: (err) => {
        alert(err);
      },
    });
  }
}
