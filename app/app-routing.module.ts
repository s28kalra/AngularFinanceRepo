import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { HomepageComponent } from "./homepage/homepage.component";

import { UserLoginComponent } from "./user-login/user-login.component";
import { CartComponent } from "./cart/cart.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";
import { AboutusComponent } from './aboutus/aboutus.component';
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-list/product-detail/product-detail.component";
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerDashboardComponent } from "./customer-dashboard/customer-dashboard.component";
import { ViewProfileComponent } from "./customer-dashboard/view-profile/view-profile.component";
import { UpdateProfileComponent } from './customer-dashboard/update-profile/update-profile.component';
import { ViewCardComponent } from './customer-dashboard/view-card/view-card.component';
import { ViewTransactionsComponent } from './customer-dashboard/view-transactions/view-transactions.component';
import { ViewCardTransactionsComponent } from './customer-dashboard/view-card-transactions/view-card-transactions.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAllCustomersComponent } from './admin-dashboard/view-all-customers/view-all-customers.component';
import { ViewAllPendingCustomersComponent } from './admin-dashboard/view-all-pending-customers/view-all-pending-customers.component';
import { AddNewProductComponent } from './admin-dashboard/add-new-product/add-new-product.component';
import { ViewAdminProfileComponent } from './admin-dashboard/view-admin-profile/view-admin-profile.component';
import { PayCreditAmountComponent } from "./pay-credit-amount/pay-credit-amount.component";
import { TermsAndConditionComponent } from "./terms-and-condition/terms-and-condition.component";
import { CardDetailsComponent } from "./card-details/card-details.component";
import { SchemesComponent } from "./schemes/schemes.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'homelink', component: HomepageComponent
  },
  {
    path: 'registerLink', component: RegisterComponent
  },
  {
    path: 'userLoginLink', component: UserLoginComponent
  },
  {
    path: 'forgotPasswordLink', component: ForgotpasswordComponent
  },
  {
    path: 'cartLink', component: CartComponent
  },
  {
    path: 'checkoutLink', component: CheckoutComponent
  },
  {
    path: 'schemesLink', component: SchemesComponent
  },
  {
    path: 'productDetailLink', component: ProductDetailComponent
  },
  {
    path: 'productListLink', component: ProductListComponent
  },
  {
    path: 'contactUsLink', component: ContactusComponent
  },
  {
    path: 'customerDashboardLink', component: CustomerDashboardComponent,
    children: [
      { path: 'viewProfile', component: ViewProfileComponent },
      { path: 'updateProfile', component: UpdateProfileComponent },
      { path: 'viewCard', component: ViewCardComponent },
      { path: 'viewTransactions', component: ViewTransactionsComponent },
      { path: 'viewCardTransactions', component: ViewCardTransactionsComponent }
    ]
  },
  {
    path: 'adminDashboardLink', component: AdminDashboardComponent,
    children: [
      { path: 'viewAdminProfile', component: ViewAdminProfileComponent },
      { path: 'updateadminProfile', component: UpdateProfileComponent },
      { path: 'viewAllCustomers', component: ViewAllCustomersComponent },
      { path: 'viewAllPendingCustomers', component: ViewAllPendingCustomersComponent },
      { path: 'addNewProduct', component: AddNewProductComponent }
    ]  
  },
  {
    path: 'termsLink', component: TermsAndConditionComponent
  },
  {
    path: 'cardTourLink', component: CardDetailsComponent
  },
  {
    path: 'payCreditAmountLink', component: PayCreditAmountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
