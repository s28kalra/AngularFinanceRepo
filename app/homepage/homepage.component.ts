import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from "../product-list/product-list.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
