import { Component, OnInit } from '@angular/core';
import { ViewAllPendingCustomersService } from "src/app/services/adminServices/view-all-pending-customers.service";
import { CustomerInfo } from "src/app/models/customer-info";
@Component({
  selector: 'app-view-all-pending-customers',
  templateUrl: './view-all-pending-customers.component.html',
  styleUrls: ['./view-all-pending-customers.component.css']
})
export class ViewAllPendingCustomersComponent implements OnInit {

  pendingCustomersList= new Array<CustomerInfo>();
  constructor(private pendingService: ViewAllPendingCustomersService) { }

  ngOnInit(): void {
    this.pendingService.viewAllPendingCustomers().subscribe(
      data=>{
        this.pendingCustomersList=data;
      }
    )
  }

  validateCustomerAndIssueEmiCard(customerId){

  }

  rejectACustomer(customerId){

  }

}
