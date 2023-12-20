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

  getProduct(): Observable<any> {
    return this.http.get<any>(this.productsUrl);
  }

  getProductById(id: string): Observable<any> {
    const productByIdUrl = `${this.productsUrl}` + id;
    return this.http.get<any>(productByIdUrl);
  }
}
