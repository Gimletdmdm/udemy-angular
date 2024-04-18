import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { Router } from '@angular/router';

const jwt = new JwtHelperService();

class DecodedToken {
  userId: string = '';
  userName: string = '';
  exp: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken;

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    this.decodedToken = JSON.parse(localStorage.getItem('app-meta') as string) || new DecodedToken();
  }

  getToken() {
    return localStorage.getItem('app-auth');
  }

  isAuthenticated() {
    return moment().isBefore(moment.unix(this.decodedToken.exp));
  }

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
      .pipe(map((token: string) => {
        this.decodedToken = jwt.decodeToken(token);
        localStorage.setItem('app-auth', token);
        localStorage.setItem('app-meta', JSON.stringify(this.decodedToken));
        return token;
      }));
  }

  logout() {
    localStorage.removeItem('app-auth');
    localStorage.removeItem('app-meta');
    this.decodedToken = new DecodedToken();
    this.router.navigate(['/login']);
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
