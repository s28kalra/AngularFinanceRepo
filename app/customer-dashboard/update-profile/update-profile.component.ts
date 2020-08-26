import { Component, OnInit } from '@angular/core';
import { UpdatecustomerService } from "../../services/updatecustomer.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { CustomerInfo } from "../../models/customer-info";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  customerInfo = new CustomerInfo();
  customerId = 0;
  confirmPass;
  account;
  constructor(private updateProfile:UpdatecustomerService , private route: Router) { 
     if (sessionStorage.getItem("customerId") != null)
  this.customerId = parseInt(sessionStorage.getItem("customerId"));
else {
  this.route.navigateByUrl('/userLoginLink')
}}

  ngOnInit(): void {
    this.customerInfo=JSON.parse( sessionStorage.getItem("customerInfo"));
    this.account=this.customerInfo.accountNumber;
  }

  manageAccount() {
    var data = this.account;
    data = data.replace(/ /g, '');
    if (data.length == 10)
    this.account = data.substring(0, 5) + ' ' + data.substring(5, 10);
    else {
      var n = data.length / 4;
      this.account = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.account += ' ' + data.substring(4 * i, 4 * (i + 1));
      }
    }
  }

 

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }
  
  confirmPassword(): boolean {
    if (this.customerInfo.customerPassword == this.confirmPass){
      return true;      
    }
    return false;
  }

  updateCustomer(form:NgForm) {
    alert(JSON.stringify(this.customerInfo));
    this.updateProfile.updatecustomer(this.customerInfo).subscribe(
      data=>{
         this.customerInfo=data;
      }
    )
   }
}
