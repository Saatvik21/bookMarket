import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ApibookService {
 
  private apiUrl = 'http://localhost:8080/api/books';
 
  constructor(private http: HttpClient) {}
 
  addBook(book: any) {
    console.log(book);
    return this.http.post(`${this.apiUrl}/add`, book);
  }
 
  getAllBooks(){
    return this.http.get(`${this.apiUrl}/getAllBooks`);
  }
 
  deleteBook(book_id:number){
    return this.http.delete(`${this.apiUrl}/deleteBook/`+ book_id);
 
  }
}