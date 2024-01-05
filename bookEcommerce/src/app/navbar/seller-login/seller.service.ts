import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // Replace with your actual backend API URL
 
  constructor(private http: HttpClient) {}
 
  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/seller-login`, user);
  }
 
  getUserRole(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/api/auth/user-role`);
  }
  // You may want to add other authentication-related methods like logout, token validation, etc.
}
