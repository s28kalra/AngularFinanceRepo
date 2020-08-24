import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../services/login.service";
import { LoginStatus } from "../status/loginStatus";
import { LoginInfo } from '../models/login-info';
import { NgForm } from "@angular/forms";
import { AdminStatus } from "src/app/status/adminStatus";
import { AdminLoginInfo } from "src/app/models/adminLoginInfo";
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  login = new LoginInfo();
  customerStatus = new LoginStatus();
  adminStatus= new AdminStatus();
  adminLoginInfo= new AdminLoginInfo();
  message: string;
  constructor(private route: Router, private loginService: LoginService) { }

  loginCustomer() {
    this.loginService.loginCustomer(this.login).subscribe(data => {
      this.customerStatus=data;
      if (this.customerStatus.status == 'SUCCESS') {
        sessionStorage.setItem('customerId', this.customerStatus.customerId.toString());
        sessionStorage.setItem('customerName', this.customerStatus.customerFirstName);
        this.route.navigate(['customerDashboardLink']);
      }
      else {
        this.message = this.customerStatus.message;
      }
    })
  }
  ngOnInit(): void {
  }

  loginAdmin(){
    this.adminLoginInfo.adminId=this.login.customerEmail;
    this.adminLoginInfo.adminPassword= this.login.customerPassword;
    this.loginService.loginAdmin(this.adminLoginInfo).subscribe(
      data=>{
        this.adminStatus=data;
        if(this.adminStatus.status=='SUCCESS'){
          sessionStorage.setItem("adminId",this.adminStatus.adminId.toString());
          sessionStorage.setItem("adminName",this.adminStatus.adminName);
          this.route.navigate(['adminDashboardLink']);
        }
        else{
          this.message=this.adminStatus.message;
        }
      }
    )
  }


}
