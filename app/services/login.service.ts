import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginInfo } from "../models/login-info";
import { Observable } from 'rxjs';
import { LoginStatus } from "../status/loginStatus";
import { AdminLoginInfo } from "src/app/models/adminLoginInfo";
@Injectable({
  providedIn: 'root' 
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginCustomer(loginInfo:LoginInfo):Observable<any>{
    var url="http://localhost:8080/login"
    return this.http.post(url,loginInfo);
  }

  loginAdmin(adminLoginInfo: AdminLoginInfo):Observable<any>{
    var url="http://localhost:8080/loginAdmin";
    return this.http.post(url,adminLoginInfo);
  }
}
