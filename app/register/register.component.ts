import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None,
  //styleUrls: ['../app.component.css']
})
export class RegisterComponent implements OnInit {

  user= new User();
  confirmPass="";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  registerUser(form:NgForm) {
   this.user.userMobile=this.user.userMobile.replace(/ /g,'');
   this.user.accountNo=this.user.accountNo.replace(/ /g,'');
   this.user.userAadharCard= this.user.userAadharCard.replace(/ /g,'');
   console.log(this.user);
  }


  manageAccount() {
    var data = this.user.accountNo;
    data = data.replace(/ /g, '');
    if (data.length == 10)
    this.user.accountNo = data.substring(0, 5) + ' ' + data.substring(5, 10);
    else {
      var n = data.length / 4;
      this.user.accountNo = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.user.accountNo += ' ' + data.substring(4 * i, 4 * (i + 1));
      }
    }
  }

  manageMobile() {
    var data = this.user.userMobile;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
    this.user.userMobile = data;
    else
    this.user.userMobile = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  manageAadharCard(){
    var data= this.user.userAadharCard;
    data = data.replace(/ /g, "");
    var n = data.length / 4;
    this.user.userAadharCard = data.substring(0, 4);
      for (var i = 1; i < n; i++) {
        this.user.userAadharCard += ' ' + data.substring(4 * i, 4 * (i + 1));
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
    if (this.user.userPassword == this.confirmPass){
      return true;      
    }
    return false;
  }

  navigateToTerms() {
    this.route.navigateByUrl('termsLink');
  }







}
