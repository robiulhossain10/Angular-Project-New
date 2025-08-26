import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() messageFromParent: string = '';
  @Output() responseToParent = new EventEmitter<string>();

  childMessage: string = '';

  sendResponse() {
    if (this.childMessage.trim() !== '') {
      this.responseToParent.emit(this.childMessage);
      this.childMessage = '';
    }
  }
}
