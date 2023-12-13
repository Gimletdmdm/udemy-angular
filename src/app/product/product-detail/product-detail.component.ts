import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/products';
import { ProductService } from '../shared/product.service';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Product | undefined; 
  destroy$: Subject<void> = new Subject<void>();

  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getProductById();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getProductById() {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const id = routeParams.get('productId')!;
    this.productService.getProductById(id).pipe(
      takeUntil(this.destroy$))
      .subscribe((product) => this.product = product);
  }
}
