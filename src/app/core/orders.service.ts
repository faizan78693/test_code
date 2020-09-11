import { Injectable } from '@angular/core'

export interface IOrder {
    id: string;
    name: string;
    address: string;
    price: number;
}
const mockOrders: IOrder[] = [
    {
        id: '324ABC',
        name: 'Headphones',
        address: 'Bengaluru',
        price: 3500
    },
    {
        id: '644SWD',
        name: 'Laptop',
        address: 'Hyderabad',
        price: 40000
    },
    {
        id: '984MDS',
        name: 'Monitor',
        address: 'Bengaluru',
        price: 12000
    },
    {
        id: '234SDH',
        name: 'SSD(256GB)',
        address: 'Bengaluru',
        price: 4500
    }
]
@Injectable()
export class OrdersService {
    private orders: IOrder[] = []

    constructor() {
        this.orders  = mockOrders;
    }
    getOrders(): IOrder[] {
        return this.orders;
    }
}
