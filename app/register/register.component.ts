import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  password: string;
  user= new User();
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registerUser(form:NgForm) {
   this.user.userFirstName=form.value.userFirstName;
   this.user.userLastName=form.value.userLastName;
   this.user.userDOB=form.value.dob;
   this.user.userEmail=form.value.userEmail
   this.user.userMobile=form.value.userMobile.replace(/ /g,'');
   this.user.userPassword=form.value.userPassword;
   this.user.cardType=form.value.cardType;
   this.user.bank=form.value.bank;
   this.user.accountNo=form.value.userAccount.replace(/ /g,'');
   this.user.ifsc=form.value.ifsc;
   this.user.userAadharCard=form.value.userAadhar.replace(/ /g,'');
   console.log(this.user);
  }


  manageAccount(id) {
    var account = (<HTMLInputElement>document.getElementById(id));
    var data = account.value;
    data = data.replace(/ /g, '');
    if (data.length == 10)
      account.value = data.substring(0, 5) + ' ' + data.substring(5, 10);
    else {
      var n = data.length / 4;
      account.value = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        account.value += ' ' + data.substring(4 * i, 4 * (i + 1));
      }
    }
  }

  manageMobile(id) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
      mobile.value = data;
    else
      mobile.value = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  manageAadharCard(id){
    var aadhar = (<HTMLInputElement>document.getElementById(id));
    var data= aadhar.value;
    data = data.replace(/ /g, "");
    var n = data.length / 4;
      aadhar.value = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        aadhar.value += ' ' + data.substring(4 * i, 4 * (i + 1));
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
    var p = (<HTMLInputElement>document.getElementById("confirmPassword"));
    var pass = p.value;
    if (this.password === pass){
      return true;      
    }
    return false;
  }








}
