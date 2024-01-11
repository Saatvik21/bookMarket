import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userforgotpassword',
  templateUrl: './userforgotpassword.component.html',
  styleUrls: ['./userforgotpassword.component.css']
})
export class UserforgotpasswordComponent {
  email: string = '';
  form: FormGroup;
 
  constructor(private fb: FormBuilder,private router:Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
 
  submitForm() {
    if (this.form.valid) {
      console.log('Form submitted with email:', this.email);
      alert("Reset link sent to your email");
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
      alert("enter a valid  email");
    }
  }
}
