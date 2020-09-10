import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from "../checkout/checkout.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css']
})
export class OrderConfirmedComponent implements OnInit {

  transactionId = 0;
  display: boolean;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    this.transactionId = Number(sessionStorage.getItem("transactionId"));
    if (this.transactionId > 0) {
      this.display = true;
    }
    else {
      this.display = false;
    }

  }

  returnToDashboard() {
    this.route.navigateByUrl("/customerDashboardLink/viewProfile");
  }

  returnToProducts() {
    this.route.navigateByUrl("/productListLink");
  }

}
