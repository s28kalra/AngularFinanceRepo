import { Injectable } from '@angular/core';
import { CustomerInfo } from '../models/customer-info';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ViewProfileService {
  
  constructor(private http:HttpClient) { }

  viewProfile(customerId):Observable<any>{
    var url="http://localhost:8080/viewProfile";
    return this.http.post(url,customerId)
  }
}
