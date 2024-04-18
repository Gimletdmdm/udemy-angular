import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    public authService = inject(AuthService);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getToken();
        
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
        }
    
        return next.handle(req);
    }
}