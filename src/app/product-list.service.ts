import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class ProductListService{
    private products: Product[];

    constructor(private http: HttpClient){}

    productSelectedEvent = new EventEmitter<Product>();
    productChanged = new Subject<Product[]>();

    fetchProducts(){
        this.http.get<Product[]>('http://127.0.0.1:5000/getProductList')
                                .subscribe(
                                    response => {
                                        console.log('>>>>>>>>>>>',response);
                                        this.products = response;
                                    }
                                )
    }


    getProducts(){
        return this.products.slice();
    }

    getProductById(index: number){
        return this.products[index];
    }

    createProduct(product: Product){
        this.products.push(product);
        this.productChanged.next(this.products.slice());
    }

    updateProduct(index: number, product:Product){
        this.products[index] = product;
        this.productChanged.next(this.products.slice());
    }
}