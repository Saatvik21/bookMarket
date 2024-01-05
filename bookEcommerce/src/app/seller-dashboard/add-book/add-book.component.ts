import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/seller-dashboard/book.service';
import { ImageService } from 'src/app/services/image.service';
import { ApibookService } from './apibook.service';
 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  autoGeneratedBookId: string | undefined;
  selectedImage: string | undefined;
  bookForm: FormGroup;
  bookDetails: any = {}; // Separate instance for each book
 
 
  constructor(private fb: FormBuilder,private router: Router,private bookService: BookService,public imageService: ImageService,private apibook:ApibookService) {
    this.bookForm = this.fb.group({
      bookName: ['', [Validators.required]],
      authorName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: ['', [Validators.required]]
    });
  }
 
  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
 
  //   if (file) {
  //     this.convertImageToDataURL(file).then(dataURL => {
  //       // Set the selected image URL
  //       this.selectedImage = dataURL;
  //       // Set the image data to the image service
  //       this.imageService.setImageData(dataURL);
  //     });
  //   }
  // }
 
  // convertImageToDataURL(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
 
  //     reader.onloadend = () => {
  //       resolve(reader.result as string);
  //     };
 
  //     reader.onerror = () => {
  //       reject(new Error('Error reading the file.'));
  //     };
 
  //     reader.readAsDataURL(file);
  //   });
   
  // }
 
addBook() {
  const bookData = {
    bookName: this.bookForm.value.bookName,
    authorName: this.bookForm.value.authorName,
    description: this.bookForm.value.description,
    price: this.bookForm.value.price,
    image: this.bookForm.value.image
  };
 
  this.apibook.addBook(bookData).subscribe({
    next:(response: any) => {
      console.log('Book added successfully:', response);
      alert('Book Added Successfully');
      // Navigate or display success message as needed
      this.router.navigate(['/seller-dashboard']);

    },
    error:
    (error: any) => {
      console.error('Error adding book:', error);
      // Handle error, display error message, etc.
    }
  }
  );
 
}
 
   
}