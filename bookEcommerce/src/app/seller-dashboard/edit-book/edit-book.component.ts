import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/seller-dashboard/book.service';
import { ImageService } from 'src/app/services/image.service';
import { ApibookService } from '../add-book/apibook.service';
 
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  addedBooks!:any;
 
  books: any[] | undefined;
  selectedBookForEdit: any;
  selectedImage: string | undefined; // To store the selected image URL (for preview)
  editedImageData: string | null = null;
  newImage: File | null = null;
 
  constructor(private router: Router, private bookService: BookService,private imageService: ImageService,private apibook:ApibookService) {}
 
  ngOnInit() {
    // Fetch the list of books from the service
    // this.books = this.bookService.getBooks();
    this.editedImageData = this.imageService.getImageData();
 
    this.apibook.getAllBooks().subscribe(
      res=>{
        this.addedBooks = res;
        console.log('res: ', res);
        console.log('added books: ', this.addedBooks);
      })
 
    console.log(this.addedBooks);
 
 
  }
 
  editBook(book: any) {
    // Navigate to the edit book page with the book ID as a parameter
    this.router.navigate(['/edit', book.id]);
  }
  editBookDetails(book: any) {
    // Set the selected book for editing
    console.log(book);
    this.selectedBookForEdit = { ...book };
  }
  deleteBook(bookId: number) {
    // Delete the book using the service
    // this.bookService.deleteBook(bookId);
    // Reload the list of books after deletion
    // this.loadBooks();
 
    this.apibook.deleteBook(bookId).subscribe(res=>{
      console.log(res);
       this.apibook.getAllBooks().subscribe(
      res=>{
        this.addedBooks = res;
        // console.log('res: ', res);
        console.log('delete books says added books: ', res);
      })
    });
 
   
 
 
    alert('Book deleted successfully!');
  }
   loadBooks() {
    console.log('load books called');
    // Load the list of books from the service
    this.apibook.getAllBooks().subscribe(
      res=>{
        this.addedBooks = res;
        console.log('res: ', res);
        console.log('added books: ', this.addedBooks);
      })    
  }
  saveEditedBook() {
    // Save the edited book using the service
    if (this.selectedBookForEdit) {
      console.log('save edited book says: ',this.selectedBookForEdit);
      this.bookService.updateBook(this.selectedBookForEdit.id, this.selectedBookForEdit).subscribe(res=>{
        if(res){
          console.log('save ediited books says : ',res);
          // if(this.books) this.books[this.selectedBookForEdit.id] = res;
          this.loadBooks();
 
          this.router.navigate(['/edit-book']);
        }
      })
      this.selectedBookForEdit = null; // Clear selected book after saving
      alert('Book edited successfully!');
 
    }
  }
 
 
}
 interface Book {
    id: number;
    authorName: string;
    bookName: string;
    description: string;
    image: string;
    price: number;
  }