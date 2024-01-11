import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/navbar/api.service';


@Component({
  selector: 'app-seller-registration',
  templateUrl: './seller-registration.component.html',
  styleUrls: ['./seller-registration.component.css']
})
export class SellerRegistrationComponent implements OnInit {
  sellerRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private apiservice:ApiService) {}
  ngOnInit() {
    this.initializeForm();
  }
 
  initializeForm() {
    this.sellerRegistrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ensure exactly 10 digits
      createPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  sellerregister() {
    if(this.sellerRegistrationForm.valid) {
      let seller = {
        "name": this.sellerRegistrationForm.value.name,
        "email": this.sellerRegistrationForm.value.email,
        "phonenumber": this.sellerRegistrationForm.value.phonenumber,
        "createPassword": this.sellerRegistrationForm.value.createPassword
      };
      console.log(seller);
      this.apiservice.sellerregister(seller).subscribe((_resultData: any) => {
        alert("Seller Registered Successfully");
        this.router.navigateByUrl("/seller-login");
       })
      }
      else{
        alert("Seller not Registered");
      };
  }

}
