import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from "src/app/models/product";
import { ProductService } from "src/app/services/adminServices/product.service";
@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

  product = new Product();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(form: NgForm) {
    this.product.productImageSource = "assets/" + this.product.productName + ".jpg";
    alert(JSON.stringify(this.product));
    this.productService.addProduct(this.product).subscribe(
      data => {
        this.product = data;
        alert(JSON.stringify(this.product));
      }
    )
  }

  isNumber(event) {
    if (isNaN(event.key))
      event.preventDefault();
  }

}
