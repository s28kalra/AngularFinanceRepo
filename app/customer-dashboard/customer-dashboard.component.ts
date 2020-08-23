import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  display;
  customerId=0;
  constructor(private router : ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.customerId=1;
    this.display="CustomerProfile";
    this.route.navigate(['viewProfile'],{relativeTo: this.router});
  }

  viewProfile(){
    this.display="viewProfile";
    this.route.navigate(['viewProfile'],{relativeTo:this.router});
  }

  updateProfile(){
    this.display="updateProfile";
    this.route.navigate(['updateProfile'], {relativeTo: this.router});
  }

  viewCard(){
    this.display="viewCard";
    this.route.navigate(['viewCard'],{relativeTo: this.router});
  }

  viewTransactions(){
    this.display="viewTransactions";
    this.route.navigate(['viewTransactions'], {relativeTo:this.router});
  }

  viewCardTransactions(){
    this.display="viewCardTransactions";
    this.route.navigate(['viewCardTransactions'], {relativeTo: this.router});
  }

}
