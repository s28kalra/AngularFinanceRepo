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
    this.checkout.cardNumber=this.checkout.cardNumber.replace(/ /g, '');
    console.log(this.checkout);
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

  manageCard() {
    var data= this.checkout.cardNumber;
    data = data.replace(/ /g, '');
    var n = data.length / 4;
    this.checkout.cardNumber= data.substring(0, 4);
    for (var i = 1; i < n; i++) {
      this.checkout.cardNumber += ' ' + data.substring(4 * i, 4 * (i + 1));
    }

  }
}
