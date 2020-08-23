import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewCardTransactionsService {

  constructor(private http: HttpClient) { }

  viewCardTransactions(customerId):Observable<any>{
    var url="http://localhost:8080/viewCardTransactions";
    return this.http.post(url,customerId);
  }
}
