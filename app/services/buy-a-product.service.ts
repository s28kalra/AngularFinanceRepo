import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customer-info';
import { Checkout } from "../models/checkout";

@Injectable({
  providedIn: 'root'
})
export class BuyAProductService {

  constructor(private http:HttpClient) { }

  buyAProductOnEmi(checkout:Checkout):Observable<any>{
    var url="http://localhost:8080/buyAProductOnEmi";
    return this.http.post(url,checkout);
  }

}
