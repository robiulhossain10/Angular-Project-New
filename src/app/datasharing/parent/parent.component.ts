import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentMessage: string = 'Hello from Parent 👨‍👩‍👦';
  childResponse: string = '';

  handleChildResponse(response: string) {
    this.childResponse = response;
  }
}