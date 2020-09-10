import { Component, OnInit } from '@angular/core';
import { Admin } from "src/app/models/admin";
import { ViewAdminProfileService } from "src/app/services/adminServices/view-admin-profile.service";
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-view-admin-profile',
  templateUrl: './view-admin-profile.component.html',
  styleUrls: ['./view-admin-profile.component.css']
})
export class ViewAdminProfileComponent implements OnInit {
  imgSrc = "";
  admin = new Admin();
  adminId = 0;
  designation = "";
  email = "";
  status: any;
  showSpinner = false;
  constructor(private viewAdminProfileService: ViewAdminProfileService, private route: Router, private snackBar: MatSnackBar) {
    if (sessionStorage.getItem("adminId") != null)
      this.adminId = parseInt(sessionStorage.getItem("adminId"));
    else
      route.navigateByUrl('/userLoginLink');
  }
 
  ngOnInit(): void {
    this.showSpinner = true;
    this.viewAdminProfileService.viewAdminProfile(this.adminId).subscribe(
      data => {
        this.admin = data;
        this.imgSrc = "assets/" + this.admin.adminId + ".jpg";
        this.email = this.admin.adminName.toLowerCase().replace(/ /g, '_') + "@easy_credit.in";
        this.showSpinner = false;
      }
    )
  }

  generateBill() {
    this.showSpinner=true;
     this.viewAdminProfileService.generateBill().subscribe(
       data => {
         this.showSpinner=false;
         this.status = data;
         this.snackBar.open("Bill Generated", "", {duration:600});
       }
     )
  }

}
