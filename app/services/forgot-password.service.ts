import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ValidateAnOtp } from "../models/validate-an-otp";
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  forgotPassword(email:string):Observable<any>{
    var url="http://localhost:8080/forgotPassword";
    return this.http.post(url,email,{responseType: 'text'});
  }

  validateAnOtp(validateAnOtp:ValidateAnOtp):Observable<any>{
    var url="http://localhost:8080/validateAnOtp";
    return this.http.post(url,validateAnOtp);
  }


}
