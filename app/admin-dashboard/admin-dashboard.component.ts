import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  
  display;
  customerId=0;
  constructor(private router : ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.customerId=1;
    this.display="AdminProfile";
    this.route.navigate(['viewAdminProfile'],{relativeTo: this.router});
  }

  viewProfile(){
    this.display="ViewProfile";
    this.route.navigate(['viewAdminProfile'],{relativeTo:this.router});
  }

  updateProfile(){
    this.display="UpdateProfile";
    this.route.navigate(['updateAdminProfile'], {relativeTo: this.router});
  }

  viewAllCustomers(){
    this.display="ViewAllCustomers";
    this.route.navigate(['viewAllCustomers'],{relativeTo: this.router});
  }

  viewAllPendingCustomers(){
    this.display="ViewAllPendingCustomers";
    this.route.navigate(['viewAllPendingCustomers'], {relativeTo:this.router});
  }

  addNewProduct(){
    this.display="AddNewProduct";
    this.route.navigate(['addNewProduct'], {relativeTo: this.router});
  }

}
