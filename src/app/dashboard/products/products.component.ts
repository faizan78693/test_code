import { Component } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['products.component.css']
})
export class ProductsComponent {
    products = this.productService.getProducts()

    constructor(private readonly productService: ProductsService){

    }
}