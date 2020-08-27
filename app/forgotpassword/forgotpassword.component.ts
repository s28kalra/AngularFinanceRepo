import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ValidateAnOtp } from "src/app/models/validate-an-otp";
import { ForgotPasswordService } from "src/app/services/forgot-password.service";
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  validateAnOtp = new ValidateAnOtp();
  status="";
  validEmail=false;
  constructor(private Route: Router, private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.forgotPasswordService.forgotPassword(this.validateAnOtp.email).subscribe(
      data => {
        this.status = data;
        if(this.status=="Invalid_Email")
          this.validEmail=false;
        else
          this.validEmail=true; 
      }
    )
  }

  checkOtp() {
    this.forgotPasswordService.validateAnOtp(this.validateAnOtp).subscribe(
      data => {
        if(data>0){
          sessionStorage.setItem("resetCustomerId",data);
          alert("Reset password page");
        }
        else
          alert("Not valid otp");
      }
    )
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }


}
