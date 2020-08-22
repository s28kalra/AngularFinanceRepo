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
  //styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  customer= new CustomerInfo();
  status= new RegisterStatus();
  confirmPass="";
  constructor(private route: Router, private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  registerCustomer(form:NgForm) {
   this.customer.customerMobile=this.customer.customerMobile.replace(/ /g,'');
   this.customer.accountNumber=this.customer.accountNumber.replace(/ /g,'');
   this.customer.customerAadharCard= this.customer.customerAadharCard.replace(/ /g,'');
   this.registerService.registerCustomer(this.customer).subscribe(
     data=>{
        this.status=data;
     }
   )
  }


  manageAccount() {
    var data = this.customer.accountNumber;
    data = data.replace(/ /g, '');
    if (data.length == 10)
    this.customer.accountNumber = data.substring(0, 5) + ' ' + data.substring(5, 10);
    else {
      var n = data.length / 4;
      this.customer.accountNumber = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.customer.accountNumber += ' ' + data.substring(4 * i, 4 * (i + 1));
      }
    }
  }

  manageMobile() {
    var data = this.customer.customerMobile;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
    this.customer.customerMobile = data;
    else
    this.customer.customerMobile = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  manageAadharCard(){
    var data= this.customer.customerAadharCard;
    data = data.replace(/ /g, "");
    var n = data.length / 4;
    this.customer.customerAadharCard = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.customer.customerAadharCard += ' ' + data.substring(4 * i, 4 * (i + 1));
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
    if (this.customer.customerPassword == this.confirmPass){
      return true;      
    }
    return false;
  }








}
