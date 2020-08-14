import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from "../models/product";
//import { Product } from "../shared/product.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ProductListComponent implements OnInit {
  // Products:Product[]=[
  //   new Product(1001,'Iphone-Xs',60000,'Brand New','https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg'),
  //   new Product(1002,'AirPods',40000,'Brand New','https://4.bp.blogspot.com/-8D464-6DGYg/WS-rBD5aXQI/AAAAAAAAjfg/3ASkKtbpfkUdTKcQA8LuCrKcC6Mc5mQ4wCEw/s1600/2.jpg'),
  //   new Product(1003,'Dell Inspiron i5 5575',52000,'Brand New','https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2018/06/03/Pictures/_2b2ca4c8-6708-11e8-b4a9-2154dcd09999.jpg')

  // ];
  selectedProduct: Product;
  @Input() product: Product;
  @Output()  productSelected=new EventEmitter<Product>(); 
   products=new Array<Product>();


  constructor() {
    var c1;
    c1 = new Product();
    c1.productId = 1;
    c1.productImageSource = "assets/airPods.jpg";
    c1.productName = "Air Pods";
    c1.productDescription = "Amazingly easy to use, Air Pods combine intelligent design with breakthrough technology and crystal clear sound";
    c1.productPrice =40000;
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
  onSelected(event:any,product:any){ 
    this.selectedProduct=product;
  }
}
