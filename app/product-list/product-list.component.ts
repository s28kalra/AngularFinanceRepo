import { Component, OnInit } from '@angular/core';
import { Product } from "../shared/product.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['../app.component.css']
})
export class ProductListComponent implements OnInit {
  Products:Product[]=[
    new Product(1001,'Iphone-Xs',60000,'Brand New','https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg'),
    new Product(1002,'AirPods',40000,'Brand New','https://4.bp.blogspot.com/-8D464-6DGYg/WS-rBD5aXQI/AAAAAAAAjfg/3ASkKtbpfkUdTKcQA8LuCrKcC6Mc5mQ4wCEw/s1600/2.jpg'),
    new Product(1003,'Dell Inspiron i5 5575',52000,'Brand New','https://images.hindustantimes.com/tech/rf/image_size_960x540/HT/p2/2018/06/03/Pictures/_2b2ca4c8-6708-11e8-b4a9-2154dcd09999.jpg')

  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
