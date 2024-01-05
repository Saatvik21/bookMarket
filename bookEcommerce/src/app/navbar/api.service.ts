import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:8080';
 

 
  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }

  sellerregister(seller: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sellerregister`, seller);
  }
  
}
