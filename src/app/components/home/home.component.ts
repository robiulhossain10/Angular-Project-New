import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title: string = 'test-app';
  name = 'Robiul';
  age = 26;
  location: string = 'Dhaka';

  imgUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&s';

  isDisabled = true;

  messege = '';
  flag = true;
  onClick() {
    if (this.flag) {
      this.imgUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg';
      this.flag = false;
    } else {
      this.imgUrl =
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&s';
      this.flag = true;
    }
  }
}

