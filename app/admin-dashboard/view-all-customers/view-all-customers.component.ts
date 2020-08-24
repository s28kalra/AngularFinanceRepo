import { Component, OnInit } from '@angular/core';
import { ViewAllCustomersService } from "src/app/services/adminServices/view-all-customers.service";
@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  
  constructor(private viewAllCustomersService: ViewAllCustomersService) { }

  ngOnInit(): void {
    this.viewAllCustomersService.viewAllCustomers().subscribe(
      data=>{
        
      }
    )
  }

}
