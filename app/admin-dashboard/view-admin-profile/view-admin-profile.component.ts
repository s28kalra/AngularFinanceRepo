import { Component, OnInit } from '@angular/core';
import { Admin } from "src/app/models/admin";
import { ViewAdminProfileService } from "src/app/services/adminServices/view-admin-profile.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-admin-profile',
  templateUrl: './view-admin-profile.component.html',
  styleUrls: ['./view-admin-profile.component.css']
})
export class ViewAdminProfileComponent implements OnInit {

  admin = new Admin();
  adminId=0;
  constructor(private viewAdminProfileService: ViewAdminProfileService, private route : Router) {
    if(sessionStorage.getItem("adminId")!=null)
      this.adminId=parseInt(sessionStorage.getItem("adminId"));
    else
      route.navigateByUrl('/userLoginLink');
   }

  ngOnInit(): void {    
    this.viewAdminProfileService.viewAdminProfile(this.adminId).subscribe(
      data=>{
        this.admin=data;
      }
    )
  }

}
