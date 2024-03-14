import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private productsUrl = '/api/v1/products';

  http = inject(HttpClient);

//   getProduct(): Observable<Product[]> {
//     return this.http.get<Product[]>('/api/v1/products')
//       .pipe(
//         catchError(this.handleError),
//       );
//   }

//   getProductById(id: string): Observable<Product> {
//     const productByIdUrl = '/api/v1/products/' + id;
//     // const productByIdUrl = `${this.productsUrl}` + id;
//     return this.http.get<Product>(productByIdUrl)
//       .pipe(
//         catchError(this.handleError),
//       );
//   }

//   private handleError(error: HttpErrorResponse) {
//     // クライアント側あるいはネットワークによるエラー
//   if (error.status === 0) {
//     console.error('An error occurred:', error.error.message);
//   // サーバー側から返却されるエラー
//   } else {
//     console.error(`Backend returned code ${error.status}, body was: `, error.error.message);
//   }
//   // エラーメッセージの返却
//   return throwError(() => new Error('Something bad happened; please try again later.'))
//   }
}
