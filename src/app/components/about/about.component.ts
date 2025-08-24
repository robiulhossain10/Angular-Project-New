import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {
  bgColor = 'lightblue';
  flag = true;
  intervalId: any;

  ngOnInit() {
    // Component লোড হওয়ার সাথে সাথে auto change শুরু হবে
    this.startColorChange();
  }

  startColorChange() {
    // আগে যদি interval চলে, তাহলে clear করে নতুনটা শুরু করবে
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.bgColor = this.flag ? 'lightgreen' : 'lightcoral';
      this.flag = !this.flag;
    }, 3000);
  }

  ngOnDestroy() {
    // Component destroy হলে interval clear করবে
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
