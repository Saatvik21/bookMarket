import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../seller-dashboard/book.service';
import { ImageService } from '../services/image.service';
import { ApiService } from '../navbar/api.service';
import { ApibookService } from '../seller-dashboard/add-book/apibook.service';
import { CartService } from '../cart/cart.service';
import { ApicartService } from '../cart/apicart.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  subscription: any;
  addedBooks:any;
  editedImageData: string | null | undefined;
  bookForm: any;
    constructor(private router: Router,private bookService: BookService,private imageService: ImageService,private apibook:ApibookService, private readonly cartService: CartService, private apicartservice:ApicartService) {}
 
    openBookDetails(bookId: string) {
      this.router.navigate(['/book-details', bookId]);
    }
    ngOnInit() {
       this.subscription = this.bookService.addedBooks$.subscribe((books) => {
        this.addedBooks = books;
      });
      this.editedImageData = this.imageService.getImageData();
 
      this.apibook.getAllBooks().subscribe(res=>this.addedBooks=res)
 
    }

    addToCart(product:any){
      console.log('home add to cart says: ', product);
      alert("Product added to cart sucessfully");
      this.cartService.addToCart(product)

      this.apicartservice.addCart(product).subscribe(res=>console.log('home add to cart says: ', res));

    }
 
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
   
    }