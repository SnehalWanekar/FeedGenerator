// user.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://your-backend-api-url'; // Replace this with your actual backend API URL

  // Initialize userDetails as an empty object
  userDetails: User = {};

  constructor(private http: HttpClient) { }

  // Method to fetch user details from the backend API
  fetchUserDetails(userId: number): Observable<User> {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.http.get<User>(url);
  }
}
