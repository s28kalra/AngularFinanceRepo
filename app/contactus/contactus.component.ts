import { Component, OnInit } from '@angular/core';
import { ContactUs } from "src/app/models/ContactUs";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  query= new ContactUs();
  mobile="";
  constructor() { }

  ngOnInit(): void {
  }

  isNumber(event, id, l) {
    var mobile = (<HTMLInputElement>document.getElementById(id));
    var data = mobile.value;
    var key = event.key;
    if (isNaN(key) || data.length > l)
      event.preventDefault();
  }

  isAName(event) {
    var key = event.key;
    if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z') || key == ' ') {

    }
    else {
      event.preventDefault();
    }
  }

  manageMobile() {
    var data = this.mobile;
    data = data.replace(/ /g, "");
    if (data.length <= 5)
    this.mobile = data;
    else
    this.mobile = data.substring(0, 5) + " " + data.substring(5, data.length);
  }

  submitQuery(){
    alert(JSON.stringify(this.query));
  }

}
