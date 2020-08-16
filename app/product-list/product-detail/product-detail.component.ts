import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from "../../models/product";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  products=new Array<Product>();
  selectedProductimg="./assets/1.jpg";
@Input() product: Product;
addedToWishlist:boolean;

  constructor(private route: Router) {
    var c1;
    c1 = new Product();
    c1.productId = 1;
    c1.productImageSource = "assets/airPods.jpg";
    c1.productName = "Air Pods";
    c1.productDescription = "Amazingly easy to use, Air Pods combine intelligent design with breakthrough technology and crystal clear sound";
    c1.productPrice =12999;
    c1.productQuantity=1;
    this.products.push(c1);

    c1 = new Product();
    c1.productId = 2;
    c1.productImageSource = "assets/dellInspironI5_5575.JPG";
    c1.productName = "Dell Inspiron I5 5575";
    c1.productDescription = "Available in Variety. Laptops W/ 10th Gen Intel® Core™ Processor. Shop Now! Customize your Tech. Laptops W/ 10th Gen Intel® Core™ Processor. Buy Now! Free MS Office Home. ";
    c1.productPrice =52000;
    c1.productQuantity=1;
    this.products.push(c1);
    
    c1 = new Product();
    c1.productId = 3;
    c1.productImageSource = "assets/iphoneXS.jpg";
    c1.productName = "Iphone XS";
    c1.productDescription = "5.8-inch Super Retina display (OLED) with HDR1, IP68 dust and water resistant (maximum depth of 2 metres up to 30 minutes)2";
    c1.productPrice =60000;
    c1.productQuantity=1;
    this.products.push(c1);
   }

  ngOnInit(): void {
  }
  onSubmitRate(form: NgForm) {
    const newrate = parseInt(form.value.rate, 10);
    form.reset();
  }
  onSubmitReview(form: NgForm) {
    const newreview = form.value.review;
    form.reset();
  }
  
  handleAddToCart() {
    // this.cartService.addProductToCart(this.productItem).subscribe(() => {
    //   this.msg.sendMsg(this.productItem)
    this.addedToWishlist = true;
    // })
  }

  handleAddToWishlist() {
    // this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
       this.addedToWishlist = true;
    // })
  }

  handleRemoveFromWishlist() {
    // this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    // })
  }
}
