import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { CustomerInfo } from '../models/customer-info';

@Injectable({
  providedIn: 'root'
})
export class ViewtransactionsService {

  constructor(private http:HttpClient) { }

  getListOfTransactionsOfCustomer(customerId):Observable<any>{
    var url="http://localhost:8080/getListOfTransactionsOfCustomer";
    return this.http.post(url,customerId);
  }
}
