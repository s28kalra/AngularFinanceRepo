import { Component, OnInit } from '@angular/core';
import { ViewtransactionsService } from "../../services/viewtransactions.service";
import { ViewCardTransactionsStatus } from "src/app/status/ViewCardTransactionsStatus";
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {
  status = new ViewCardTransactionsStatus();
  customerId = 0;
  showSpinner = false;
  sortTransactionid = true;
  sortDate = true;
  sortNoOfEmisLeft = true;
  sortAmount = true;
  sortTenure = true;
  sortProductQuantity = true;
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
          this.status.transactions = data;
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
