import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent,
    RegisterComponent
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

}
