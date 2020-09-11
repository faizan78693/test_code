import { Component, OnInit } from '@angular/core';
import { IOrder, OrdersService } from 'src/app/core/orders.service';
import { IProduct, ProductsService } from 'src/app/core/products.service';
import { NavigationEnd, Router } from '@angular/router';
export enum VIEWS {
    PRODUCTS = 'products',
    ORDERS = 'orders',
    HOME = 'welcome',
    ABOUT = 'about'
}
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})
export class SidebarComponent implements OnInit{
    orders: IOrder[] = [];
    products: IProduct[] = [];
    activeView: VIEWS = VIEWS.HOME;
    views = VIEWS;
    constructor(private readonly productsService: ProductsService,
        private readonly ordersService: OrdersService,
        private readonly router: Router) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                
            }
        })
    }

    ngOnInit(): void {
        this.orders = this.ordersService.getOrders();
        this.products = this.productsService.getProducts();
    }

    isActiveView(view: VIEWS): boolean {
        return view === this.activeView;
    }

    updateActiveView(view): void {
        switch (view) {
            case this.views.HOME: {
                this.activeView = this.views.HOME;
                break;
            }
            case this.views.ORDERS: {
                this.activeView = this.views.ORDERS;
                break;
            }
            case this.views.PRODUCTS: {
                this.activeView = this.views.PRODUCTS;
                break;
            }
            case this.views.ABOUT: {
                this.activeView = this.views.ABOUT;
                break;
            }
        }
    }
}