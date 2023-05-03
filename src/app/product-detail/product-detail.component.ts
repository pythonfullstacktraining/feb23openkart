import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  sProduct: Product;
  id: number;

  constructor(private productListService: ProductListService,
              private route: ActivatedRoute,
              private router: Router
              ){}


  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.sProduct = this.productListService.getProductById(this.id);
      }
    )
  }


}
