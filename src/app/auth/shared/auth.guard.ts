import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    private auth = inject(AuthService);
    private router = inject(Router);

    canActivate( route : ActivatedRouteSnapshot, state : RouterStateSnapshot ) {
        if(this.auth.isAuthenticated()) {
            console.log('true');
            return true;
        } 
        console.log('false');
        this.router.navigate(['/login']);
        return false;
    }
}