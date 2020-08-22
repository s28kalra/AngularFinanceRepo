import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { UserLoginComponent } from "./user-login/user-login.component";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    RegisterComponent,
    AdminLoginComponent,
    UserLoginComponent,
    HomepageComponent,
    CartComponent,
    AboutusComponent,
    CheckoutComponent,
    ContactusComponent,
    ForgotpasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
