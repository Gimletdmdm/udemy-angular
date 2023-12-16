import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
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
                title: 'detail'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'index.html',
        pathMatch: 'full'
    }
];
