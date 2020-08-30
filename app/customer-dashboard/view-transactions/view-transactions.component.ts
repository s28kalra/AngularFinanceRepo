import { Component, OnInit } from '@angular/core';
import { ViewtransactionsService } from "../../services/viewtransactions.service";
import { CustomerInfo } from "../../models/customer-info";
import { ViewCardTransactionsStatus } from "src/app/status/ViewCardTransactionsStatus";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  status = new ViewCardTransactionsStatus();
  transactions: any;
  customerId = 0;
  showSpinner = false;
  message="";
  constructor(private service: ViewtransactionsService, private route: Router) {
    if (sessionStorage.getItem("customerId") != null)
      this.customerId = parseInt(sessionStorage.getItem("customerId"));
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  ngOnInit(): void {
    this.showSpinner = true;
    if (this.customerId > 0) {
      this.service.getListOfTransactionsOfCustomer(this.customerId).subscribe(
        data => {
          this.transactions = data;
          // if(this.transactions.){
          //   this.message="No Transaction Yet";
          // }
          this.showSpinner = false;
        }
      )
    }
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }
  orderByTransactionId() {
    this.transactions.sort((a, b) => b.transactionId.valueOf() - a.transactionId.valueOf());
  }

  orderByDate() {
    this.transactions.sort((a, b) => b.transactionDate.valueOf() - a.transactionDate.valueOf());
  }

  orderByNoOfEmisLeft() {
    this.transactions.sort((a, b) => b.noOfEmisLeft - a.noOfEmisLeft);
  }

  orderByLowToHighAmount() {
    this.transactions.sort((a, b) => a.amount - b.amount);
  }

  orderByHighToLowAmount() {
    this.transactions.sort((a, b) => b.amount - a.amount);
  }

  orderByProductQuantity() {
    this.transactions.sort((a, b) => b.productQuantity.valueOf() - a.productQuantity.valueOf());
  }

  orderByTenure() {
    this.transactions.sort((a, b) => b.emiTenure.valueOf() - a.emiTenure.valueOf());
  }
}
