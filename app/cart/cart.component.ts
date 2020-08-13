import { Component, OnInit } from '@angular/core';
import { Product } from "../models/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subTotal=0;
  cart = new Array<Product>();
  constructor() {
    var c1;
    c1 = new Product();
    c1.productId = 1;
    c1.productImageSource = "assets/airPods.jpg";
    c1.productName = "Air Pods";
    c1.productDescription = "Amazingly easy to use, Air Pods combine intelligent design with breakthrough technology and crystal clear sound";
    c1.productPrice =40000;
    c1.productQuantity=1;
    this.cart.push(c1);

    c1 = new Product();
    c1.productId = 2;
    c1.productImageSource = "assets/dellInspironI5_5575.JPG";
    c1.productName = "Dell Inspiron I5 5575";
    c1.productDescription = "Available in Variety. Laptops W/ 10th Gen Intel® Core™ Processor. Shop Now! Customize your Tech. Laptops W/ 10th Gen Intel® Core™ Processor. Buy Now! Free MS Office Home. ";
    c1.productPrice =52000;
    c1.productQuantity=1;
    this.cart.push(c1);
    
    c1 = new Product();
    c1.productId = 3;
    c1.productImageSource = "assets/iphoneXS.jpg";
    c1.productName = "Iphone XS";
    c1.productDescription = "5.8-inch Super Retina display (OLED) with HDR1, IP68 dust and water resistant (maximum depth of 2 metres up to 30 minutes)2";
    c1.productPrice =60000;
    c1.productQuantity=1;
    this.cart.push(c1);
    

  }

  ngOnInit(): void {
    this.cart.forEach(element => {
      this.subTotal+=element.productPrice*element.productQuantity;
    });
      
  }

  findIndex(productId){
    for(var i=0;i<this.cart.length;i++)
      if(this.cart[i].productId===productId)
        return i;
    return -1;
  }

  addQuantity(productId){
    var index=this.findIndex(productId);
    this.cart[index].productQuantity++;
    this.subTotal+=this.cart[index].productPrice;
  }

  reduceQuantity(productId){
    var index=this.findIndex(productId);
    if(this.cart[index].productQuantity>1){
      this.cart[index].productQuantity--;    
      this.subTotal-=this.cart[index].productPrice;
    }
  }

  removeProduct(productId){
    var index=this.findIndex(productId);
    this.subTotal-=this.cart[index].productQuantity* this.cart[index].productPrice;
    this.cart.splice(index,1);
  }

}
