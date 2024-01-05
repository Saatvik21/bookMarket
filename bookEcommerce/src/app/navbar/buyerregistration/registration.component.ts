import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/navbar/api.service';
 


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationForm!: FormGroup;
 
  constructor(private fb: FormBuilder,private router: Router,private http:HttpClient ,private apiservice:ApiService) {}
 
  ngOnInit() {
    this.initializeForm();
  }
 
  initializeForm() {
    this.registrationForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ensure exactly 10 digits
      gender: ['', Validators.required],
      createPassword: ['', [Validators.required, Validators.minLength(8)]]
     });
   
  }
  register() {
    if(this.registrationForm.valid) {
      let user = {
        "firstname": this.registrationForm.value.firstname,
        "lastname": this.registrationForm.value.lastname,
        "email": this.registrationForm.value.email,
        "phonenumber": this.registrationForm.value.phonenumber,
        "gender": this.registrationForm.value.gender,
        "createPassword": this.registrationForm.value.createPassword
      };
      console.log(user);
      this.apiservice.register(user).subscribe((_resultData: any) => {
        alert("User Registered Successfully");
        this.router.navigateByUrl("/login");
       })
      }
      else{
        alert("User not Registered");
      };
  }

}
