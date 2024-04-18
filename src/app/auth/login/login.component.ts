import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    errors: any; 

    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit() {}

    login(loginForm: NgForm) {
        console.log(loginForm.value);
        this.authService.login(loginForm.value)
            .subscribe({
                next: (token) => {
                    this.router.navigate(['/products'])
                },
                error: (err: HttpErrorResponse) => {
                    console.error(err);
                    this.errors = err.error.errors;
                }
            });
    }
}
