import { Component, OnInit } from '@angular/core';
import { ViewCardTransactionsService } from "src/app/services/view-card-transactions.service";
import { Router } from '@angular/router';
import { ViewCardTransactionsStatus } from "src/app/status/ViewCardTransactionsStatus";
@Component({
  selector: 'app-view-card-transactions',
  templateUrl: './view-card-transactions.component.html',
  styleUrls: ['./view-card-transactions.component.css']
})
export class ViewCardTransactionsComponent implements OnInit {

  status= new ViewCardTransactionsStatus();
  customerId=0;
  constructor(private service: ViewCardTransactionsService, private route: Router) {
    if(sessionStorage.getItem("customerId")!=null)
      this.customerId= parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink');
    }
   }

  ngOnInit(): void {
    if(this.customerId>0){
      this.service.viewCardTransactions(this.customerId).subscribe(
        data=>{
          this.status=data;
        }
      )

    }
    else{
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  orderByDate(){
    this.status.transactions.sort((a,b)=> b.transactionDate.valueOf()-a.transactionDate.valueOf());
  }
  
  orderByNoOfEmisLeft(){
    this.status.transactions.sort((a,b)=>b.noOfEmisLeft-a.noOfEmisLeft);
  }

  orderByLowToHighAmount(){
    this.status.transactions.sort((a,b)=>a.amount-b.amount);
  }

  orderByHighToLowAmount(){
    this.status.transactions.sort((a,b)=>b.amount-a.amount);
  }



}
