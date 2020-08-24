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
  //collapsed = true;
  constructor(private route: Router) { }
  customerName=sessionStorage.getItem("customerName")
  isLogin() {
    if (sessionStorage.getItem("customerId") != null) {
      this.dashboard = "customerDashboardLink";
       this.a=this.dashboard;
      //this.route.navigateByUrl("/customerDashboardLink");
      return true;
    }
    else if (sessionStorage.getItem("adminId") != null) {
      this.dashboard = "adminDashboardLink";
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
    sessionStorage.removeItem("adminId");
    this.route.navigateByUrl('/userLoginLink');
  }
}
