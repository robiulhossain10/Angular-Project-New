import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Default message set
  private messageSource = new BehaviorSubject<string>('No message yet');
  currentMessage = this.messageSource.asObservable();

  // Method to change message
  changeMessage(message: string) {
    this.messageSource.next(message);
  }
}
