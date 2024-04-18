import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { environment } from './environments/environment';
import { TokenInterceptor } from './app/auth/shared/token.interceptor';

bootstrapApplication(AppComponent, 
  {
    providers: [
      provideRouter(routes),
      provideHttpClient(
        withInterceptorsFromDi(),
      ),
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ]
  }
  ).catch((err) => console.error(err));
