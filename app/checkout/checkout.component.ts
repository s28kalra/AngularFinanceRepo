import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
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

  checkout = new Checkout();
  product=new Product();
  customerId:any;
  transactionId:any;
  paid=false;
  finalAmount;
  constructor(private route: Router, private buyAProduct:BuyAProductService) {
    if(sessionStorage.getItem("customerId")!=null)
    this.customerId=parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink');
    }

   }


  ngOnInit(): void {
    this.product=JSON.parse(sessionStorage.getItem('selectedItem'));
    this.finalAmount=this.product.productPrice;
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
  confirmAndPay(){
    this.checkout.productId=this.product.productId;
    this.checkout.productQuantity=this.product.productQuantity;
    this.checkout.customerId=this.customerId;
    this.checkout.cardNumber=this.checkout.cardNumber.replace(/ /g,'');
    alert(JSON.stringify(this.checkout));
    this.buyAProduct.buyAProductOnEmi(this.checkout).subscribe(
      data=>{ this.transactionId= data;
        //this.paid=true;

      }
    )

  }
}
