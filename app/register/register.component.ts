import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { CustomerInfo } from '../models/customer-info';
import { RegisterService } from "../services/register.service";
import { RegisterStatus } from "../status/registerStatus";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {

  customer = new CustomerInfo();
  status = new RegisterStatus();
  confirmPass;
  mobile = "";
  account = "";
  aadhar = "";
  showSpinner = false;
  errorMessage="";
  successMsg="";
  constructor(private route: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
  }

  registerCustomer(form: NgForm) {
    this.showSpinner = true;
    this.customer.customerMobile = this.mobile.replace(/ /g, '');
    this.customer.accountNumber = this.account.replace(/ /g, '');
    this.customer.customerAadharCard = this.aadhar.replace(/ /g, '');
    this.registerService.registerCustomer(this.customer).subscribe(
      data => {
        this.status = data;
        if(this.status.status=='SUCCESS')
          this.route.navigateByUrl("/userLoginLink");
        else
          this.errorMessage=this.status.message;
        this.showSpinner = false;
      }
    )
    

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

  manageMobile() {
    var data = this.mobile;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
      this.mobile = data;
    else
      this.mobile = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  manageAadharCard() {
    var data = this.aadhar;
    data = data.replace(/ /g, "");
    var n = data.length / 4;
    this.aadhar = data.substring(0, 4);
    for (var i = 1; i < n; i++) {
      this.aadhar += ' ' + data.substring(4 * i, 4 * (i + 1));
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
    if (this.customer.customerPassword == this.confirmPass) {
      return true;
    }
    return false;
  }

  navigateToTerms() {
    this.route.navigateByUrl('termsLink');
  }







}
