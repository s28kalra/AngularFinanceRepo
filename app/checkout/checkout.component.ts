import { Component, OnInit } from '@angular/core';
import { Checkout } from "../models/checkout";
import { BuyAProductService } from "../services/buy-a-product.service";
import { Router } from '@angular/router';
import { Product } from "../models/product";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  showSpinner = false;
  checkout = new Checkout();
  product = new Product();
  customerId: any;
  transactionId: any;
  finalAmount;
  cardNumber = "";
  constructor(private route: Router, private buyAProduct: BuyAProductService) {
    if (sessionStorage.getItem("customerId") != null)
      this.customerId = parseInt(sessionStorage.getItem("customerId"));
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  ngOnInit(): void {
    this.product = JSON.parse(sessionStorage.getItem('selectedItem'));
    this.finalAmount = this.product.productPrice * this.product.productQuantity;
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

  manageCard() {
    var data = this.cardNumber;
    data = data.replace(/ /g, '');
    var n = data.length / 4;
    this.cardNumber = data.substring(0, 4);
    for (var i = 1; i < n; i++) {
      this.cardNumber += ' ' + data.substring(4 * i, 4 * (i + 1));
    }
  }

  confirmAndPay() {
    this.checkout.productId = this.product.productId;
    this.checkout.productQuantity = this.product.productQuantity;
    this.checkout.customerId = this.customerId;
    this.checkout.cardNumber = this.cardNumber.replace(/ /g, '');
    this.showSpinner = true;
    this.buyAProduct.buyAProductOnEmi(this.checkout).subscribe(
      data => {
        this.transactionId = data;
        sessionStorage.setItem("transactionId", this.transactionId);
        this.showSpinner = false;
        this.route.navigateByUrl("/orderConfirmedLink");
      }
    )
  }
}