import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-shippingdetails',
  templateUrl: './shippingdetails.component.html',
  styleUrls: ['./shippingdetails.component.css']
})
export class ShippingDetailsComponent implements OnInit {
  shippingForm!: FormGroup;
 
  constructor(private fb: FormBuilder,private router:Router) {}
 
  ngOnInit(): void {
    this.createForm();
  }
 
  createForm(): void {
    this.shippingForm = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });
  }
 
  onSubmit(): void {
    if (this.shippingForm.valid) {
      console.log('Form submitted with values:', this.shippingForm.value);
    } else {
      console.log('Form is invalid');
      alert("Please enter a valid shipping details");
    }
  }
 
  payment(){
    alert("procced to payment");
    this.router.navigate(['/payment']);
  }
}