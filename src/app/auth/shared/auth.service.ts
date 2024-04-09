import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  register(userData: any): Observable<any> {
    const userDataUrl = '/api/v1/users/register';
    // const productByIdUrl = `${this.productsUrl}` + id;
    return this.http.post<any>(userDataUrl, userData)
      // .pipe(
      //   catchError(this.handleError),
      // );
  }

  login(userData: any): Observable<any> {
    const userDataUrl = '/api/v1/users/login';
    return this.http.post<any>(userDataUrl, userData)
  }

  private handleError(error: HttpErrorResponse) {
    // クライアント側あるいはネットワークによるエラー
  if (error.status === 0) {
    console.error('An error occurred:', error.error.message);
  // サーバー側から返却されるエラー
  } else {
    console.error(`Backend returned code ${error.status}, body was: `, error.error.message);
  }
  // エラーメッセージの返却
  return throwError(() => new Error('Something bad happened; please try again later.'))
  }
}
