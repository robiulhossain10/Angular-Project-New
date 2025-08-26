import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-siblings-a',
  templateUrl: './siblings-a.component.html',
  styleUrls: ['./siblings-a.component.css'],
})
export class SiblingsAComponent {
  message: string = '';

  constructor(private dataService: DataService) {}

  sendMessage() {
    if (this.message.trim() !== '') {
      this.dataService.changeMessage(this.message);
    }
  }
}