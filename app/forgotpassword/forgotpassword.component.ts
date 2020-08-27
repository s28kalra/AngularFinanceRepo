import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ValidateAnOtp } from "src/app/models/validate-an-otp";
import { ForgotPasswordService } from "src/app/services/forgot-password.service";
import { templateSourceUrl } from '@angular/compiler';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  validateAnOtp = new ValidateAnOtp();
  status="";
  validEmail=false;
  notAValidOtp="";
  showSpinner=false;
  constructor(private route: Router, private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.showSpinner=true;
    this.status="";
    this.forgotPasswordService.forgotPassword(this.validateAnOtp.email).subscribe(
      data => {
        this.status = data;
        if(this.status=="Invalid_Email")
          this.validEmail=false;
        else
          this.validEmail=true; 
        this.showSpinner=false;
      }
    )
  }

  checkOtp() {
    this.showSpinner=true;
    this.notAValidOtp="";
    this.forgotPasswordService.validateAnOtp(this.validateAnOtp).subscribe(
      data => {
        if(data>0){
          sessionStorage.setItem("resetCustomerId",data);
          this.route.navigateByUrl("/resetPasswordLink");
        }
        else
          this.notAValidOtp="Not a Valid Otp";
        this.showSpinner=false;
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
