import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any = {
    name: '',
    email: '',
    password: '',
    age: null,
    dob: '',
    subscribe: '',
    gender: '',
    country: '',
    bio: '',
    rating: 5,
    file: null,
    checkbox: null
  };

  countries: string[] = ["Bangladesh", "India", "USA", "UK", "Canada"];

  onSubmit() {
    console.log('Form Submitted:', this.formData);
    alert('Check Console for logged data')
  }
}
