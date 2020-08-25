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

  
  p=new Product();
  //selectedProductimg="./assets/1.jpg";
//@Input() product: Product;
//addedToWishlist:boolean;

  constructor(private route: Router) {
   

   }

  ngOnInit(): void {
     this.p=JSON.parse(sessionStorage.getItem('selectedItem'));
     
   
  }
}
  
  
