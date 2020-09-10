import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  display;
  customerId=0;
  constructor(private route:Router) { 
    if(sessionStorage.getItem("customerId")!=null)
      this.customerId= parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  ngOnInit(): void {
    
  }


  buyProducts(){
    this.route.navigateByUrl('/productListLink');
  }

}
