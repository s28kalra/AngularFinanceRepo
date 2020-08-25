import { Component, OnInit } from '@angular/core';
import { CardDetails } from "src/app/models/CardDetails";
import { Router } from '@angular/router';
import { GetCardDetailsService } from "../../services/get-card-details.service";

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

  cardDetails= new CardDetails();
  customerId=0;
  month;
  year;
  cardImageSource;
  valid;

  constructor(private service :GetCardDetailsService, private route:Router) {
    if(sessionStorage.getItem("customerId")!=null)
    this.customerId=parseInt(sessionStorage.getItem("customerId"));
    else{
      this.route.navigateByUrl('/userLoginLink');
    }
   }

  ngOnInit(): void {
    if(this.customerId>0) {
      this.service.getCardDetails(this.customerId).subscribe(
        data=>{
          this.cardDetails=data;
          this.month=this.cardDetails.cardExpiry.valueOf().toString().substring(5,7);
          this.year=this.cardDetails.cardExpiry.valueOf().toString().substring(2,4);
          if(this.cardDetails.cardType=="Gold")
            this.cardImageSource = "assets/gold.PNG";
          else
            this.cardImageSource = "assets/titanium.PNG";
        }
      )
    }
    else {
      this.route.navigateByUrl('/userLoginLink');
    }

  }

  ifTrue() {
    if(this.cardDetails.amountToBePaid==0)
      return true;
    else 
      return false;
  }

  payNow(){
    this.route.navigate(['payCreditAmountLink']);
  }

}
