import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from "./register/register.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { CartComponent } from "./cart/cart.component";

import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-list/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'homelink', component: HomepageComponent
  },
  {
    path: 'registerLink', component: RegisterComponent
  },
  {
    path: 'adminLoginLink', component: AdminLoginComponent
  },
  {
    path: 'userLoginLink', component: UserLoginComponent
  },
  {
    path:'cartLink', component: CartComponent
  },
  {
    path:'checkoutLink', component:CheckoutComponent
  },
  {
    path:'productDetailLink', component: ProductDetailComponent
  },
  {
	  path:'productListLink', component: ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
