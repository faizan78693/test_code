import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { OrdersService } from '../core/orders.service';
import { ProductsService } from '../core/products.service';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from "./orders/orders.component";
import { ProductsComponent } from "./products/products.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  imports: [ CommonModule, SharedModule, DashboardRoutingModule],
  declarations: [HeaderComponent,SidebarComponent, OrdersComponent, ProductsComponent, WelcomeComponent, DashboardComponent],
  providers: [OrdersService, ProductsService]
})
export class DashboardModule {}
