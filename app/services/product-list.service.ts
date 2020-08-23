import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ProductListComponent } from "../product-list/product-list.component";


@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private http:HttpClient) { }

  getAllProducts(){
    var url="http://localhost:8080/getAllProducts";
    return this.http.get(url);
  }

}
