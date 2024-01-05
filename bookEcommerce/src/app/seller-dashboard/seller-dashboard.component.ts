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
    this.router.navigate(['/add-book']);
  }

  navigateToEditBook() {
    this.router.navigate(['/edit-book']);
  }

  navigateToDeleteBook() {
    this.router.navigate(['/delete-book']);
  }

}
