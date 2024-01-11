import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApicartService {

  private apiUrl = 'http://localhost:8080/api/books';
 
  constructor(private http: HttpClient) {}
 
 
  getcart(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/getcart/${id}`);
  }
 
  addCart(cartItems: any): Observable<any> {
    console.log('api cart service says: ',cartItems);
    return this.http.post(`${this.apiUrl}/addcart`, cartItems);
  }
 
  getAllcart(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getallcart`);
  }
}
