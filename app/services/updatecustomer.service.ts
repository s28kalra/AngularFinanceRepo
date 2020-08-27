import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customer-info';

@Injectable({
  providedIn: 'root'
})
export class UpdateCustomerService {

  constructor(private http:HttpClient) { }

  updateCustomer(customerInfo:CustomerInfo):Observable<any>{
    var url="http://localhost:8080/updateCustomer";
    return this.http.post(url,customerInfo);
  }
}
