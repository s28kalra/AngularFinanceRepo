import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-confirm-payment-dialog',
  templateUrl: './confirm-payment-dialog.component.html',
  styleUrls: ['./confirm-payment-dialog.component.css']
})
export class ConfirmPaymentDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public payment: any) { }

  ngOnInit(): void {
  }

}
