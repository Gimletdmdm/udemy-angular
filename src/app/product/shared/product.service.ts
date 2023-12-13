import { Injectable, inject } from '@angular/core';
import { Product, products } from 'src/app/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = '/api/v1/products/';

  http = inject(HttpClient);

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  getProductById(id: string): Observable<Product> {
    const productByIdUrl = `${this.productsUrl}/` + id;
    return this.http.get<Product>(productByIdUrl);
  }
}
