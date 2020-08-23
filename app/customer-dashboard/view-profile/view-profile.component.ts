import { Component, OnInit } from '@angular/core';

import { ViewProfileService } from "src/app/services/view-profile.service";
import { CustomerInfo } from 'src/app/models/customer-info';
import { Router } from '@angular/router';




@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  customerInfo=new CustomerInfo;
customerId=0;
  constructor(private viewProfile:ViewProfileService,private route: Router) {
    if(sessionStorage.getItem("customerId")!=null)
    this.customerId=parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink')
    }
   }

  ngOnInit(): void {
    if(this.customerId>0){
this.viewProfile.viewProfile(this.customerId).subscribe(data=>{
  this.customerInfo=data;
  })
}
  }
}
  
