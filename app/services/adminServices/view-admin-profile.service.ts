import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewAdminProfileService {

  constructor(private http: HttpClient) { }

  viewAdminProfile(adminId): Observable<any>{
    var url="http://localhost:8080/viewAdminProfile";
    return this.http.post(url, adminId);
  }
  generateBill(){
    var url="http://localhost:8080/generateBill"
    //return this.http.post(url);
  }
}
