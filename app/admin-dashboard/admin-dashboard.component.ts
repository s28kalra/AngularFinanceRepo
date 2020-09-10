import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  display;
  adminId=0;
  constructor(private route:Router) { 
    if(sessionStorage.getItem("adminId")!=null)
      this.adminId=parseInt(sessionStorage.getItem("adminId"));
    else
      route.navigateByUrl('/userLoginLink');
  }

  ngOnInit(): void {
    this.display="AdminProfile";
  //  this.route.navigate(['viewAdminProfile'],{relativeTo: this.router});
  }

}
