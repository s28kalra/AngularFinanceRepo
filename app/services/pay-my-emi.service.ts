import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PayMyEmiService {

  constructor(private http : HttpClient) { }

  payEmiCard(customerId): Observable<any> {
    var url = "http://localhost:8080/payMyEmi";
    return this.http.post(url,customerId);
  }
}
