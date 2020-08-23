import { Component, OnInit } from '@angular/core';
import { ViewtransactionsService } from "../../services/viewtransactions.service";
import { CustomerInfo } from "../../models/customer-info";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  transactions:any;
  customerId=0;
  constructor(private service : ViewtransactionsService, private route:Router) {
    if(sessionStorage.getItem("customerId")!=null)
    this.customerId=parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink')
    }
   }

  ngOnInit(): void {
    if(this.customerId>0){
    this.service.getListOfTransactionsOfCustomer(this.customerId).subscribe(
      data=>{
        this.transactions=data;
      }
      )
    }
    else{
      this.route.navigateByUrl('/userLoginLink');
    }
  }

}
