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
  // @Input() product: Product;
  // @Output()  productSelected=new EventEmitter<Product>(); 
  //  products=new Array<Product>();
  products: any;
  //productDetailId: any;


  constructor(private route:Router,private service: ProductListService) {
   }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe(
      data=>{
        this.products=data;
      }
    )
  }
  onSelected(product){ 
    sessionStorage.setItem("selectedItem",JSON.stringify(product));
    //alert(JSON.stringify(product));
    this.route.navigateByUrl('productDetailLink');
  }
  

}