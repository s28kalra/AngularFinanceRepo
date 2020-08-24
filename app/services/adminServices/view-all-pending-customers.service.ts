import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewAllPendingCustomersService {

  constructor(private http: HttpClient) { }

  viewAllPendingCustomers(): Observable<any> {
    var url = "http://localhost:8080/pendingCustomers";
    return this.http.get(url);
  }

  validateCustomerAndIssueEmiCard(customerId): Observable<any> {
    var url = "http://localhost:8080/validateCustomerAndIssueEmiCard";
    return this.http.post(url, customerId);
  }

}
