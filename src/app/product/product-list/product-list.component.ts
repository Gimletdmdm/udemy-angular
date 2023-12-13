import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from 'src/app/products';
import { ProductService } from '../shared/product.service';
import { Subject, takeUntil } from 'rxjs';

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
export class ProductListComponent implements OnInit, OnDestroy {

  products!: Product[];
  destroy$: Subject<void> = new Subject<void>();

  private productServiece = inject(ProductService);
  
  ngOnInit(): void {
    this.getProduct();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  
  getProduct() {
    this.productServiece.getProduct().pipe(
      takeUntil(this.destroy$))
      .subscribe(products => this.products = products);
  }
}
