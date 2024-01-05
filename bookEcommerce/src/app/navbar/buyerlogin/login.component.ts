import { Component, OnInit } from '@angular/core';
import { AuthService } from './user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      createPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        createPassword: this.loginForm.value.createPassword
      };

      this.authService.login(user).subscribe({
        next: (response) => {
          // Handle successful login (e.g., store token, redirect to home, etc.)
          if (response) {
            console.log('Login successful', response);
            alert('Login successful');
            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          // Handle login error (e.g., display error message)
          console.error('Login failed', error);
          alert('Login Failed');
        }
      });
    } else {
      console.log('Form is not valid');
      alert('Form not Valid');
      // You can also show an error message to the user here
    }
  }
}
