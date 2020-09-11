import { Injectable } from '@angular/core'

export interface IProduct {
    id: string;
    name: string;
    imageURL: string;
    price: string;
}
const mockProducts: IProduct[] = [
    {
        id: '1',
        name: 'Item 1',
        imageURL: 'dummyURL',
        price: '15,000'
    },
    {
        id: '2',
        name: 'Item 2',
        imageURL: 'dummyURL',
        price:  '13,400'
    },
    {
        id: '3',
        name: 'Item 3',
        imageURL: 'dummyURL',
        price:  '9,999'
    },
    {
        id: '4',
        name: 'Item 4',
        imageURL: 'dummyURL',
        price:  '10,999'
    }
]
@Injectable()
export class ProductsService {
    private products: IProduct[] = []

    constructor() {
        this.products  = mockProducts;
    }
    getProducts(): IProduct[] {
        return this.products;
    }
}
