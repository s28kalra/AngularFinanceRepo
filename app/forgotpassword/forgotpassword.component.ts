import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private Route:Router) { }

  ngOnInit(): void {
  }

  bool:boolean = false;

  myFunction() 
  {
    if(this.bool) {
      this.bool = false;
    }
    else {
      this.bool = true;
    }
    
    /* var x = document.getElementById("forgotpassword-myDIV");
    if (x.style.display === "none ") {
        x.style.display = "block ";
    } else {
        x.style.display = "none "; */
  }

}
