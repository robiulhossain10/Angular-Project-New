import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://backend-api-vhdg.onrender.com/api/users'; 

  constructor(private http: HttpClient) {}

  // Create user
  createUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  // Get all users
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
