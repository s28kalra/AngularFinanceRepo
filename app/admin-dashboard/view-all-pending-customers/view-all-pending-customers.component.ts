import { Component, OnInit } from '@angular/core';
import { ViewAllPendingCustomersService } from "src/app/services/adminServices/view-all-pending-customers.service";
import { CustomerInfo } from "src/app/models/customer-info";
@Component({
  selector: 'app-view-all-pending-customers',
  templateUrl: './view-all-pending-customers.component.html',
  styleUrls: ['./view-all-pending-customers.component.css']
})
export class ViewAllPendingCustomersComponent implements OnInit {

  pendingCustomersList = new Array<CustomerInfo>();
  pendingCustomersMainList = new Array<CustomerInfo>();
  search = '';
  constructor(private pendingService: ViewAllPendingCustomersService) { }

  ngOnInit(): void {
    this.pendingService.viewAllPendingCustomers().subscribe(
      data => {
        this.pendingCustomersList = data;
        this.pendingCustomersMainList = [...this.pendingCustomersList];
      }
    )
  }

  searchByName() {
    var regex = new RegExp(this.search, "i");
    if (this.search != '') {
      this.pendingCustomersList.splice(0, this.pendingCustomersList.length);
      this.pendingCustomersList = this.pendingCustomersMainList.filter(customer => regex.test(customer.customerFirstName));
    }
    else {
      this.pendingCustomersList = [...this.pendingCustomersMainList];
    }
  }

  findIndex(list, customerId) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].customerId == customerId)
        return i;
    }
    return -1;
  }

  deleteFromBothLists(customerId) {
    var index = this.findIndex(this.pendingCustomersList, customerId);
    this.pendingCustomersList.splice(index, 1);
    var indexMain = this.findIndex(this.pendingCustomersMainList, customerId);
    this.pendingCustomersMainList.splice(indexMain, 1);
  }

  validateCustomerAndIssueEmiCard(customerId) {
    this.pendingService.validateCustomerAndIssueEmiCard(customerId).subscribe(
      data => {
        alert(JSON.stringify(data));
        if (data.cardNumber > 0)
          this.deleteFromBothLists(customerId);
      }
    )
  }

  rejectACustomer(customerId) {
    this.pendingService.rejectACustomer(customerId).subscribe(
      data=>{
        if(data.customerId>0)
          this.deleteFromBothLists(customerId);
      }
    )
  }

}
