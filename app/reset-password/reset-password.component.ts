import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateCustomerService } from "src/app/services/updateCustomer.service";
import { CustomerInfo } from '../models/customer-info';
import { ViewProfileService } from '../services/view-profile.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ResetPasswordComponent implements OnInit {

  customerInfo = new CustomerInfo();
  resetCustomerId=0;
  confirmPass="";
  showSpinner=false;
  constructor(private route:Router, private updatePassword:UpdateCustomerService, private viewProfile: ViewProfileService) {
    if(sessionStorage.getItem("resetCustomerId")!=null)
      this.resetCustomerId=parseInt(sessionStorage.getItem("resetCustomerId"));
    else
      route.navigateByUrl("/userLoginLink");
   }

  ngOnInit(): void {
    this.viewProfile.viewProfile(this.resetCustomerId).subscribe(
      data=>{
        this.customerInfo=data;
        this.customerInfo.customerPassword="";
      }
    )
  }

  confirmPassword(): boolean {
    if (this.customerInfo.customerPassword == this.confirmPass){
      return true;      
    }
    return false;
  }

  resetPassword(){
    this.showSpinner=true;
    this.updatePassword.updateCustomer(this.customerInfo).subscribe(
      data=>{
        sessionStorage.removeItem("resetCustomerId");
        this.route.navigateByUrl("/userLoginLink");
        this.showSpinner=false;
      }
    )
  }




}
