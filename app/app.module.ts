import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { ViewProfileComponent } from './customer-dashboard/view-profile/view-profile.component';
import { UpdateProfileComponent } from './customer-dashboard/update-profile/update-profile.component';
import { ViewCardComponent } from './customer-dashboard/view-card/view-card.component';
import { ViewTransactionsComponent } from './customer-dashboard/view-transactions/view-transactions.component';
import { ViewCardTransactionsComponent } from './customer-dashboard/view-card-transactions/view-card-transactions.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAllCustomersComponent } from './admin-dashboard/view-all-customers/view-all-customers.component';
import { ViewAllPendingCustomersComponent } from './admin-dashboard/view-all-pending-customers/view-all-pending-customers.component';
import { AddNewProductComponent } from './admin-dashboard/add-new-product/add-new-product.component';
import { ViewAdminProfileComponent } from './admin-dashboard/view-admin-profile/view-admin-profile.component';
import { UpdateAdminProfileComponent } from './admin-dashboard/update-admin-profile/update-admin-profile.component';



import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SchemesComponent } from './schemes/schemes.component';
import { StatisticsComponent } from './admin-dashboard/statistics/statistics.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    RegisterComponent,
    UserLoginComponent,
    HomepageComponent,
    CartComponent,
    AboutusComponent,
    CheckoutComponent,
    ContactusComponent,
    ForgotpasswordComponent,
    CustomerDashboardComponent,
    ViewProfileComponent,
    UpdateProfileComponent,
    ViewCardComponent,
    ViewTransactionsComponent,
    ViewCardTransactionsComponent,
    AdminDashboardComponent,
    ViewAllCustomersComponent,
    ViewAllPendingCustomersComponent,
    AddNewProductComponent,
    ViewAdminProfileComponent,
    UpdateAdminProfileComponent,

    

    TermsAndConditionComponent,
    CardDetailsComponent,
    SchemesComponent,
    StatisticsComponent,


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
