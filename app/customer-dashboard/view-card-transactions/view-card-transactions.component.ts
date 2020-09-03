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

  status = new ViewCardTransactionsStatus();
  customerId = 0;
  sortTransactionid = true;
  sortDate = true;
  sortNoOfEmisLeft = true;
  sortAmount = true;
  sortTenure = true;
  sortProductQuantity = true;
  showSpinner = false;
  message:any;
  constructor(private service: ViewCardTransactionsService, private route: Router) {
    if (sessionStorage.getItem("customerId") != null)
      this.customerId = parseInt(sessionStorage.getItem("customerId"));
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  ngOnInit(): void {
    if (this.customerId > 0) {
      this.showSpinner = true;
      this.service.viewCardTransactions(this.customerId).subscribe(
        data => {
          this.status = data;
          if(JSON.stringify(this.status.transactions).length<5)         
          this.message="No Transaction Yet";
          this.showSpinner = false;
        }
      )

    }
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  orderByTransactionId() {
    if (this.sortTransactionid) {
      this.status.transactions.sort((a, b) => b.transactionId.valueOf() - a.transactionId.valueOf());
      this.sortTransactionid = false;
    }
    else {
      this.status.transactions.sort((a, b) => a.transactionId.valueOf() - b.transactionId.valueOf());
      this.sortTransactionid = true;
    }
  }

  orderByDate() {
    if (this.sortDate) {
      this.status.transactions.sort((a, b) => b.transactionDate.valueOf() - a.transactionDate.valueOf());
      this.sortDate = false;
    }
    else {
      this.status.transactions.sort((a, b) => a.transactionDate.valueOf() - b.transactionDate.valueOf());
      this.sortDate = true;
    }

  }

  orderByNoOfEmisLeft() {
    if (this.sortNoOfEmisLeft) {
      this.status.transactions.sort((a, b) => b.noOfEmisLeft - a.noOfEmisLeft);
      this.sortNoOfEmisLeft = false;
    }
    else {
      this.status.transactions.sort((a, b) => a.noOfEmisLeft - b.noOfEmisLeft);
      this.sortNoOfEmisLeft = true;
    }
  }

  orderByAmount() {
    if (this.sortAmount) {
      this.status.transactions.sort((a, b) => a.amount - b.amount);
      this.sortAmount = false;
    }
    else {
      this.status.transactions.sort((a, b) => b.amount - a.amount);
      this.sortAmount = true;
    }
  }

  orderByProductQuantity() {
    if (this.sortProductQuantity) {
      this.status.transactions.sort((a, b) => b.productQuantity.valueOf() - a.productQuantity.valueOf());
      this.sortProductQuantity = false;
    }
    else {
      this.status.transactions.sort((a, b) => a.productQuantity.valueOf() - b.productQuantity.valueOf());
      this.sortProductQuantity = true;
    }
  }

  orderByTenure() {
    if (this.sortTenure) {
      this.status.transactions.sort((a, b) => b.emiTenure.valueOf() - a.emiTenure.valueOf());
      this.sortTenure = false;
    }
    else {
      this.status.transactions.sort((a, b) => a.emiTenure.valueOf() - b.emiTenure.valueOf());
      this.sortTenure = true;
    }
  }

}
