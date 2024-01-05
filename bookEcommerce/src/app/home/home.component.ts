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
    // books = [
    //   {
    //     id: 1,
    //     name: 'The Great Gatsby',
    //     author: 'F. Scott Fitzgerald',
    //     description: 'A novel about the American Dream.',
    //     price: 10.99,
    //     imageUrl: 'assets/images/1.jpg'
    //   },
    //   {
    //     id: 2,
    //     name: 'To Kill a Mockingbird',
    //     author: 'Harper Lee',
    //     description: 'A classic of modern American literature.',
    //     price: 12.99,
    //     imageUrl: 'assets/images/2.jpg'
    //   },
    //   {
    //     id: 3,
    //     name: '1984',
    //     author: 'George Orwell',
    //     description: 'A dystopian novel set in a totalitarian society.',
    //     price: 14.99,
    //     imageUrl: 'assets/images/3.png'
    //   },
    //   {
    //     id: 4,
    //     name: 'The Catcher in the Rye',
    //     author: 'J.D. Salinger',
    //     description: 'A story about teenage angst and alienation.',
    //     price: 9.99,
    //     imageUrl: 'assets/images/4.jpg'
    //   },
    //   {
    //     id: 5,
    //     name: 'One Hundred Years of Solitude',
    //     author: 'Gabriel García Márquez',
    //     description: 'A magical realist novel that tells the multi-generational story of the Buendía family.',
    //     price: 16.99,
    //     imageUrl: 'assets/images/5.jpg'
    //   },
    //   {
    //     id: 6,
    //     name: 'Brave New World',
    //     author: 'Aldous Huxley',
    //     description: 'A novel that envisions a dystopian future where technology controls society.',
    //     price: 13.99,
    //     imageUrl: 'assets/images/6.jpg'
    //   },
    //   {
    //     id: 7,
    //     name: 'The Lord of the Rings',
    //     author: 'J.R.R. Tolkien',
    //     description: 'A fantasy epic set in the world of Middle-earth.',
    //     price: 19.99,
    //     imageUrl: 'assets/images/7.jpg'
    //   },
    //   {
    //     id: 8,
    //     name: 'Pride and Prejudice',
    //     author: 'Jane Austen',
    //     description: 'A classic romantic novel about societal expectations and love.',
    //     price: 11.99,
    //     imageUrl: 'assets/images/8.jpg'
    //   },
    //   {
    //     id: 9,
    //     name: 'The Hobbit',
    //     author: 'J.R.R. Tolkien',
    //     description: 'The adventures of Bilbo Baggins in Middle-earth.',
    //     price: 15.99,
    //     imageUrl: 'assets/images/9.jpg'
    //   },
    //   {
    //     id: 10,
    //     name: 'Harry Potter and the Sorcerer\'s Stone',
    //     author: 'J.K. Rowling',
    //     description: 'The first book in the Harry Potter series.',
    //     price: 17.99,
    //     imageUrl: 'assets/images/10.jpg'
    //   },
    //   {
    //     id: 11,
    //     name: 'The Shining',
    //     author: 'Stephen King',
    //     description: 'A psychological horror novel set in an isolated hotel.',
    //     price: 14.99,
    //     imageUrl: 'assets/images/11.jpg'
    //   },
    //   {
    //     id: 12,
    //     name: 'The Da Vinci Code',
    //     author: 'Dan Brown',
    //     description: 'A mystery thriller that explores the secrets of the Catholic Church.',
    //     price: 12.99,
    //     imageUrl: 'assets/images/12.jpg'
    //   },
    //   {
    //     id: 13,
    //     name: 'The Alchemist',
    //     author: 'Paulo Coelho',
    //     description: 'A philosophical novel about a shepherd\'s journey to find his treasure.',
    //     price: 10.99,
    //     imageUrl: 'assets/images/13.jpg'
    //   },
    //   {
    //     id: 14,
    //     name: 'The Girl with the Dragon Tattoo',
    //     author: 'Stieg Larsson',
    //     description: 'A psychological thriller novel.',
    //     price: 16.99,
    //     imageUrl: 'assets/images/14.jpg'
    //   },
    //   {
    //     id: 15,
    //     name: 'The Hunger Games',
    //     author: 'Suzanne Collins',
    //     description: 'A dystopian novel set in a post-apocalyptic world.',
    //     price: 13.99,
    //     imageUrl: 'assets/images/15.jpg'
    //   },
    //   {
    //     id: 16,
    //     name: 'Dune',
    //     author: 'Frank Herbert',
    //     description: 'A science fiction novel set in a distant future amidst a feudal interstellar society.',
    //     price: 18.99,
    //     imageUrl: 'assets/images/16.jpg'
    //   },
    //   {
    //     id: 17,
    //     name: 'Moby-Dick',
    //     author: 'Herman Melville',
    //     description: 'A novel about Captain Ahab\'s quest for revenge against the white whale.',
    //     price: 15.99,
    //     imageUrl: 'assets/images/17.jpg'
    //   },
    //   {
    //     id: 18,
    //     name: 'The Road',
    //     author: 'Cormac McCarthy',
    //     description: 'A post-apocalyptic novel about a father and son\'s journey.',
    //     price: 14.99,
    //     imageUrl: 'assets/images/18.jpg'
    //   },
    //   {
    //     id: 19,
    //     name: 'Jane Eyre',
    //     author: 'Charlotte Brontë',
    //     description: 'A classic novel that follows the experiences of its titular character.',
    //     price: 11.99,
    //     imageUrl: 'assets/images/19.jpg'
    //   },
    //   {
    //     id: 20,
    //     name: 'The Chronicles of Narnia',
    //     author: 'C.S. Lewis',
    //     description: 'A series of high fantasy novels for children.',
    //     price: 19.99,
    //     imageUrl: 'assets/images/20.jpg'
    //   },
    //   {
    //     id: 21,
    //     name: 'The Picture of Dorian Gray',
    //     author: 'Oscar Wilde',
    //     description: 'A philosophical novel about the consequences of hedonism.',
    //     price: 12.99,
    //     imageUrl: 'assets/images/21.jpg'
    //   },
    //   {
    //     id: 22,
    //     name: 'Gone with the Wind',
    //     author: 'Margaret Mitchell',
    //     description: 'A historical novel set against the backdrop of the American Civil War.',
    //     price: 16.99,
    //     imageUrl: 'assets/images/22.jpg'
    //   },
    //   {
    //     id: 23,
    //     name: 'A Tale of Two Cities',
    //     author: 'Charles Dickens',
    //     description: 'A historical novel set in London and Paris before and during the French Revolution.',
    //     price: 14.99,
    //     imageUrl: 'assets/images/23.jpg'
    //   },
    //   {
    //     id: 24,
    //     name: 'The Fault in Our Stars',
    //     author: 'John Green',
    //     description: 'A novel about two teenagers who fall in love after meeting at a cancer support group.',
    //     price: 10.99,
    //     imageUrl: 'assets/images/24.jpg'
    //   },
    //   {
    //     id: 25,
    //     name: 'The Grapes of Wrath',
    //     author: 'John Steinbeck',
    //     description: 'A novel that tells the story of the Joad family during the Great Depression.',
    //     price: 15.99,
    //     imageUrl: 'assets/images/25.jpg'
    //   },
    //   {
    //     id: 26,
    //     name: 'The Hitchhiker\'s Guide to the Galaxy',
    //     author: 'Douglas Adams',
    //     description: 'A comedic science fiction series.',
    //     price: 11.99,
    //     imageUrl: 'assets/images/26.jpg'
    //   },
    //   {
    //     id: 27,
    //     name: 'Wuthering Heights',
    //     author: 'Emily Brontë',
    //     description: 'A novel about the passionate and destructive love between Heathcliff and Catherine Earnshaw.',
    //     price: 14.99,
    //     imageUrl: 'assets/images/27.jpg'
    //   },
    //   {
    //     id: 28,
    //     name: 'The Stand',
    //     author: 'Stephen King',
    //     description: 'A post-apocalyptic horror novel.',
    //     price: 17.99,
    //     imageUrl: 'assets/images/28.jpg'
    //   }
     
    // ];
  subscription: any;
  addedBooks:any;
  editedImageData: string | null | undefined;
  bookForm: any;
    constructor(private router: Router,private bookService: BookService,private imageService: ImageService,private apibook:ApibookService, private readonly cartService: CartService, private apicartservice:ApicartService) {}
 
    openBookDetails(bookId: string) {
      // Assuming you have a route for book details with the path '/book-details/:id'
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
      // Unsubscribe to avoid memory leaks
      this.subscription.unsubscribe();
    }
   
    }