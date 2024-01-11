
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; 
 
  constructor(private http: HttpClient) {}
 
  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }
 
  getUserRole(): Observable<string> {
    return this.http.get<string>(`${this.baseUrl}/api/auth/user-role`);
  }
}
