import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-siblings-b',
  templateUrl: './siblings-b.component.html',
  styleUrls: ['./siblings-b.component.css'],
})
export class SiblingsBComponent implements OnInit {
  message: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Subscribe to service to get live updates
    this.dataService.currentMessage.subscribe((msg) => {
      this.message = msg;
    });
  }
}