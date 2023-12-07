import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined; 

  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
