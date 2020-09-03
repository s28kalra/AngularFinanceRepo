import { Component, OnInit } from '@angular/core';
import { CardDetails } from "src/app/models/CardDetails";
import { Router } from '@angular/router';
import { GetCardDetailsService } from "../../services/get-card-details.service";
import { ActivateEmiCardService } from "../../services/activate-emi-card.service";
import { PayMyEmiService } from "../../services/pay-my-emi.service";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmPaymentDialogComponent } from "src/app/confirm-payment-dialog/confirm-payment-dialog.component";

@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

  cardDetails = new CardDetails();
  customerId = 0;
  month;
  year;
  cardImageSource;
  valid;
  activate: boolean;
  pay;
  showSpinner = false;
  pendingVerfication=true;
  constructor(private service: GetCardDetailsService, private activateService: ActivateEmiCardService, private payServie: PayMyEmiService, private route: Router,
    private dialog: MatDialog) {
    if (sessionStorage.getItem("customerId") != null)
      this.customerId = parseInt(sessionStorage.getItem("customerId"));
    else {
      this.route.navigateByUrl('/userLoginLink');
    }
  }

  ngOnInit(): void {

    if (this.customerId > 0) {
      this.showSpinner=true;
      this.service.getCardDetails(this.customerId).subscribe(
        data => {
          if (data != null) {
            this.pendingVerfication=false;
            this.cardDetails = data;
            this.month = this.cardDetails.cardExpiry.valueOf().toString().substring(5, 7);
            this.year = this.cardDetails.cardExpiry.valueOf().toString().substring(2, 4);
            this.cardDetails.cardBalance = Math.floor(this.cardDetails.cardBalance);
            this.cardDetails.amountToBePaid = Math.ceil(this.cardDetails.amountToBePaid);
            if (this.cardDetails.cardType == "Gold")
              this.cardImageSource = "assets/gold.png";
            else
              this.cardImageSource = "assets/titanium.png";
          }
          this.showSpinner=false;
        }
      )

    }
    else {
      this.route.navigateByUrl('/userLoginLink');
    }

  }

  
  ifTrue() {
    if (this.cardDetails.amountToBePaid == 0)
      return true;
    else
      return false;
  }

  payMyEmi(customerId) {
    var confirmPaymentDialogRef= this.dialog.open(ConfirmPaymentDialogComponent,{data: {pay: this.cardDetails.amountToBePaid}});

    confirmPaymentDialogRef.afterClosed().subscribe(data=>{
      if(data=="true"){
        this.showSpinner=true;
        this.payServie.payEmiCard(customerId).subscribe(
          data1 => {
            this.showSpinner=false;
            window.location.reload();
          }
        )
      }
    })
  }

  activateEmiCard(customerId) {
    this.activateService.activateEmiCard(customerId).subscribe(
      data => {
        window.location.reload();
      }
    )
  }

}
