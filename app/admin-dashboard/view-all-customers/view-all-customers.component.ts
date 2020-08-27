import { Component, OnInit } from '@angular/core';
import { ViewAllCustomersService } from "src/app/services/adminServices/view-all-customers.service";
import { CustomerInfo } from 'src/app/models/customer-info';
@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {
  showSpinner=false;
  customersList = new Array<CustomerInfo>();
  customersMainList = new Array<CustomerInfo>();
  search = '';  
  constructor(private viewAllCustomersService: ViewAllCustomersService) { }

  ngOnInit(): void {
    this.showSpinner=true;
    this.viewAllCustomersService.viewAllCustomers().subscribe(
      data=>{
         this.customersList=data;
         this.customersMainList=[...this.customersList];
         this.showSpinner=false;
      }
    )
  }

  searchByName() {
    var regex = new RegExp(this.search, "i");
    if (this.search != '') {
      this.customersList.splice(0, this.customersList.length);
      this.customersList = this.customersMainList.filter(customer => regex.test(customer.customerFirstName));
    }
    else {
      this.customersList = [...this.customersMainList];
    }
  }

}
