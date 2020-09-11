import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'welcome'
    },
    {
        path: '**',
        redirectTo: 'welcome'

    }
    ]
  }
];
@NgModule({
    imports: [
  RouterModule.forChild(
        dashboardRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class DashboardRoutingModule { }