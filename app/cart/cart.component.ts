import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subTotal=0;
  display=false;
  cartProduct=new Product();
  customerId:any;
  constructor(private route:Router) { 
    if(sessionStorage.getItem("customerId")!=null)
    this.customerId=parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink');
    }

  }

  ngOnInit(): void {
    this.cartProduct=JSON.parse(sessionStorage.getItem('selectedItem'));
    this.cartProduct.productQuantity=1;
      this.subTotal+=this.cartProduct.productPrice*this.cartProduct.productQuantity;

      if(sessionStorage.getItem("selectedItem")!=null)
      this.display=true;
      
  }


  addQuantity(productId){
    this.cartProduct.productQuantity++;
    this.subTotal+=this.cartProduct.productPrice;
  }

  reduceQuantity(productId){
    if(this.cartProduct.productQuantity>1){
      this.cartProduct.productQuantity--;    
      this.subTotal-=this.cartProduct.productPrice;
    }
  }

  removeProduct(productId){
    this.subTotal-=this.cartProduct.productQuantity* this.cartProduct.productPrice;
    sessionStorage.removeItem('selectedItem');
    window.location.reload();
  }
  gotoCheckout(){
    if(this.subTotal>0)
    {
    sessionStorage.setItem("selectedItemQty",JSON.stringify(this.cartProduct.productQuantity));
    sessionStorage.setItem("selectedItem",JSON.stringify(this.cartProduct));
    this.route.navigateByUrl("/checkoutLink");
    }
  }

}
