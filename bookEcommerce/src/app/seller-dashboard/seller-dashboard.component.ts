import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.css']
})
export class SellerDashboardComponent {
  constructor(private router: Router) {}

  navigateToAddBook() {
    // Navigate to the add book page
    this.router.navigate(['/add-book']);
  }

  navigateToEditBook() {
    // Navigate to the edit book page
    this.router.navigate(['/edit-book']);
  }

  navigateToDeleteBook() {
    // Navigate to the delete book page
    this.router.navigate(['/delete-book']);
  }

}
