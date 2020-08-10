import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['../app.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
