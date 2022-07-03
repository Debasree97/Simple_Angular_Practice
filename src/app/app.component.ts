import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currencyForm = new FormGroup({
    countryName: new FormControl(''),
    currencyName: new FormControl(''),
    currencyCode: new FormControl(''),
    activeStat: new FormControl(''),
  });

  activeStatus: string = 'Inactive';

  onSubmit() {
    console.log(this.currencyForm.value);
  }

  radioActive(event: any) {
    this.activeStatus = event.target.value;
    if (event.target.value) {
      this.activeStatus = 'Active';
    }
  }
}
