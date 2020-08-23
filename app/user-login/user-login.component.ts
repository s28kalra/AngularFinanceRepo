import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../services/login.service";
import { LoginStatus } from "../status/loginStatus";
import { LoginInfo } from '../models/login-info';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
login=new LoginInfo();
status=new LoginStatus();
message:string;
  constructor(private route:Router,private loginService:LoginService) { }

  loginCustomer(){
alert(JSON.stringify(this.login))
this.loginService.loginCustomer(this.login).subscribe(data=>{
  alert(JSON.stringify(data))
   if(data.status=='SUCCESS'){
     let customerId:any=data.customerId;
    let customerName=data.customerFirstName;
     sessionStorage.setItem('customerId',customerId);
     sessionStorage.setItem('customerName',customerName);
     this.route.navigate(['customerDashboardLink']);
   }
  else{
    this.message=data.message;
   }
})
  }
  ngOnInit(): void {
  }

  
}
