import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Product } from "../models/product";
//import { Product } from "../shared/product.model";
import { Router } from '@angular/router';
import { ProductListService } from "../services/product-list.service";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProduct: Product;
  showSpinner=false; 
  products = new Array<Product>();
  searchedProducts:any= new Array<Product>();
  search = '';
  //productDetailId: any;


  constructor(private route:Router,private service: ProductListService) {
   }

  ngOnInit(): void {
    this.showSpinner=true; 
    this.service.getAllProducts().subscribe(
      data=>{
        this.searchedProducts=data;
        this.products = [...this.searchedProducts];
        this.showSpinner=false; 
      }
    )
  }
  searchByName() {
    var regex = new RegExp(this.search, "i");
    if (this.search != '') {
      this.searchedProducts.splice(0, this.searchedProducts.length);
      this.searchedProducts = this.products.filter(product => regex.test(product.productName));
    }
    else {
      this.searchedProducts = [...this.products];
    }
  }
  onSelected(product){ 
    sessionStorage.setItem("selectedItem",JSON.stringify(product));
    //alert(JSON.stringify(product));
    this.route.navigateByUrl('productDetailLink');
  }
  

}