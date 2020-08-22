import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customer-info';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerCustomer(customerInfo:CustomerInfo):Observable<any>{
    var url="http://localhost:8080/register";
    return this.http.post(url,customerInfo);
  }



}
