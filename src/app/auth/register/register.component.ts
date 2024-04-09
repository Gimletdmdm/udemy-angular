import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        FormsModule
    ],
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    errors: any; 
    
    private authService = inject(AuthService);
    private router = inject(Router);

    ngOnInit() {}

    register(registerForm: NgForm) {
        console.log(registerForm.value);
        this.authService.register(registerForm.value)
            .subscribe({
                next: (res) => {
                    console.log("success!");
                    this.router.navigate(['/login']);
                },
                error: (err: HttpErrorResponse) => {
                    console.error(err);
                    this.errors = err.error.errors;
                }
            });
    }
}
