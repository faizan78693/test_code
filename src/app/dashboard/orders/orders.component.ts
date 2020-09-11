import { Component } from '@angular/core';
import { IOrder, OrdersService } from 'src/app/core/orders.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['orders.component.css']
})
export class OrdersComponent {
    orders: IOrder[] = this.ordersService.getOrders();

    constructor(private readonly ordersService: OrdersService){}
}