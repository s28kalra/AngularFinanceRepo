import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dashboard = "";
  title = 'Finance';
  a:any;
  customerName="";
  adminName="";
  //collapsed = true;
  constructor(private route: Router) { }
 
  
  isLogin() {
    if (sessionStorage.getItem("customerId") != null) {
      this.dashboard = "customerDashboardLink";
      this.customerName=sessionStorage.getItem("customerName")
      
      return true;
    }
    else if (sessionStorage.getItem("adminId") != null) {
      this.dashboard = "adminDashboardLink";
      this.adminName=sessionStorage.getItem("adminName");
      return true;
    }
    return false;
  }
  
  navigation(){
    if(this.isLogin()==true && this.dashboard== "customerDashboardLink"){
      this.route.navigateByUrl("/customerDashboardLink");
    }
    if(this.isLogin()==true && this.dashboard== "adminDashboardLink"){
      this.route.navigateByUrl("/adminDashboardLink");
    }
  }
  logout(){
    sessionStorage.removeItem("customerId");
    sessionStorage.removeItem("customerName");
    sessionStorage.removeItem("adminId");
    sessionStorage.removeItem("adminName");
    this.route.navigateByUrl('/userLoginLink');
  }
}
