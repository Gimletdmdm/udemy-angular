import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/shared/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'register'
    },
    {
        path: 'products',
        component: ProductComponent,
        title: 'products',
        children: [
            {
                path: '',
                component: ProductListComponent,
                title: 'product-list'
            },
            {
                path: 'detail/:productId',
                component: ProductDetailComponent,
                title: 'detail',
                canActivate: [AuthGuard]
            }
        ]
    },
];
