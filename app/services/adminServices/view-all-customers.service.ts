import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewAllCustomersService {

  constructor(private http: HttpClient) { }

  viewAllCustomers():Observable<any>{
    var url="http://localhost:8080/viewAllCustomers";
    return this.http.get(url);
  }
}
