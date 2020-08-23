import { Component, OnInit } from '@angular/core';
import { CustomerInfo } from 'src/app/models/customer-info';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  customerInfo = new CustomerInfo();
  constructor() { }

  ngOnInit(): void {
    
  }

}
