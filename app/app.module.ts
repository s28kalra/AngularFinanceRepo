import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { UserLoginComponent } from "./user-login/user-login.component";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductSearchComponent } from "./product-list/product-search/product-search.component";

import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    ProductSearchComponent,
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
