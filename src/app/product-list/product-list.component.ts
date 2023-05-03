import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  products: Product[];
  selectedProduct: Product;

  constructor(private productListService: ProductListService,
              private router: Router,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.productListService.fetchProducts();
    this.products = this.productListService.getProducts();
    this.productListService.productSelectedEvent.subscribe(
      (product:Product)=>{
        this.selectedProduct = product;
      }
    )
  }

  onNewProduct(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
