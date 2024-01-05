import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
 
  constructor(private fb: FormBuilder,private route:Router) {}
 
  ngOnInit(): void {
    this.createForm();
  }
 
  createForm(): void {
    this.paymentForm = this.fb.group({
      paymentMethod: ['', Validators.required],
      // Add additional fields for each payment method (e.g., UPI details, Net Banking details)
      upiId: [''],
      netBankingUsername: [''],
      netBankingPassword: ['']
    });
  }
 
  onSubmit(): void {
    // Handle form submission logic here
    if (this.paymentForm.valid) {
      // Form is valid, proceed with your payment logic
      console.log('Form submitted with values:', this.paymentForm.value);
      alert("Your Payment Is Successful");
      alert("Thank You");
      alert("Your Order is Successsfully Placed!!!!");
      this.route.navigate(['/home']);
    } else {
      // Form is invalid, display error messages or take appropriate action
      console.log('Form is invalid');
    }
  }
}