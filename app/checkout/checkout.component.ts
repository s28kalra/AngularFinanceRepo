import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Checkout } from "../models/checkout";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkout = new Checkout();
  constructor() { }


  ngOnInit(): void {
  }

  checkoutFunction(form: NgForm) {
    this.checkout.emiTenure = form.value.emiTenure;
    this.checkout.shippingAddress=form.value.shippingAddress;
    this.checkout.cardHolderName=form.value.cardHolderName;
    this.checkout.cardNumber=form.value.cardNumber.replace(/ /g, '');
    this.checkout.expiryMonth=form.value.expiryMonth;
    this.checkout.expiryYear=form.value.expiryYear;
    this.checkout.cvv=form.value.cvv;
    console.log(this.checkout);
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

  manageCard(id) {
    var account = (<HTMLInputElement>document.getElementById(id));
    var data = account.value;
    data = data.replace(/ /g, '');
    var n = data.length / 4;
    account.value = data.substring(0, 4);
    for (var i = 1; i < n; i++) {
      account.value += ' ' + data.substring(4 * i, 4 * (i + 1));
    }

  }
}
