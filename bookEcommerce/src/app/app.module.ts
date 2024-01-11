import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './navbar/buyerlogin/login.component';
import { RegistrationComponent } from './navbar/buyerregistration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerLoginComponent } from './navbar/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './navbar/seller-registration/seller-registration.component';
import { SellerDashboardComponent } from './seller-dashboard/seller-dashboard.component';
import { AddBookComponent } from './seller-dashboard/add-book/add-book.component';
import { EditBookComponent } from './seller-dashboard/edit-book/edit-book.component';
 import { BookService } from './seller-dashboard/book.service';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
 import { UserforgotpasswordComponent } from './navbar/buyerlogin/userforgotpassword/userforgotpassword.component';
import { SellerforgotpasswordComponent } from './navbar/seller-login/sellerforgotpassword/sellerforgotpassword.component';
import { PaymentComponent } from './payment/payment.component';
import { ShippingDetailsComponent } from './shippingdetails/shippingdetails.component';

    
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    SellerDashboardComponent,
    AddBookComponent,
    EditBookComponent,
    CartComponent,
    UserforgotpasswordComponent,
    SellerforgotpasswordComponent,
    ShippingDetailsComponent,
    PaymentComponent
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [BookService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
