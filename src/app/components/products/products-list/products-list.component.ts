import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../models/product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<Product[]>;
  columnsToDisplay = ['title', 'description', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  openProductApplicationForm(product: Product) {
    this.productsService.openProductApplicationForm(product);
  }
}
