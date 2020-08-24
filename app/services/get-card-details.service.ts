import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCardDetailsService {

  constructor(private http: HttpClient) {  }

  getCardDetails(customerId):Observable<any>{
    var url="http://localhost:8080/getCardDetails";
    return this.http.post(url,customerId);
  }
}
