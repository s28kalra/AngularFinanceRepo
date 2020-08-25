import { Injectable } from '@angular/core';
import { Product } from "../../models/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(product: Product):Observable<any>{
    var url="http://localhost:8080/addProduct";
    return this.http.post(url,product);
  }
}
