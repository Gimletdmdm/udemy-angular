import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { products } from 'src/app/products';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    ProductDetailComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  
  ngOnInit(): void {
    this.products = products;
  }
}
