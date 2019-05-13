import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  list: Array<Product> = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.list = this.productService.list;
    this.productService.onLoadList.subscribe(serviceList => {
      this.list = serviceList;
    })
    this.productService.loadList();
  }

}
