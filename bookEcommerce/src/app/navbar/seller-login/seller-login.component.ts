import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from './seller.service';


@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent {
  sellerLoginForm!: FormGroup;


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.sellerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      createPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.sellerLoginForm.valid) {
      const user = {
        email: this.sellerLoginForm.value.email,
        createPassword: this.sellerLoginForm.value.createPassword
      };

      this.authService.login(user).subscribe({
        next: (response) => {
          if (response) {
            console.log('Login successful', response);
            alert('Login successful');
            this.router.navigate(['/seller-dashboard']);
          }
        },
        error: (error) => {
          console.error('Login failed', error);
          alert('Login Failed');
        }
      });
    } else {
      console.log('Form is not valid');
      alert('Form not Valid');
    }
  }

}
