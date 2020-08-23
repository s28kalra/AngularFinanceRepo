import { Component, OnInit } from '@angular/core';
import { EmiCard } from "src/app/models/emi-card";
@Component({
  selector: 'app-view-card',
  templateUrl: './view-card.component.html',
  styleUrls: ['./view-card.component.css']
})
export class ViewCardComponent implements OnInit {

  emiCard= new EmiCard();
  cardType="";
  month;
  constructor() { }

  ngOnInit(): void {
    this.emiCard.cardNumber="12345678";
    this.emiCard.cardNumberStart="10012002";
    if(this.emiCard.cardNumberStart=="10012002")
      this.cardType="Titanium";
    else
      this.cardType="Gold";
    this.emiCard.cardExpiry= new Date("2025-08-31");
    this.month= this.emiCard.cardExpiry.getMonth();
    this.emiCard.cardCvv=234;
    this.emiCard.cardBalance=50000;
    this.emiCard.cardStatus=true;
    this.emiCard.amountToBePaid=0;
  }

}
