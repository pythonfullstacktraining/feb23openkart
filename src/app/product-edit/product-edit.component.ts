import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductListService } from '../product-list.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  id:number;
  editMode: boolean = false;
  productForm: FormGroup;

  constructor(private route: ActivatedRoute, private productListService: ProductListService, private router:Router){}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.editMode = params['id']!=null;
        this.myForm();
      }
    )
  }

  private myForm(){
    let productName = '';
    let productDescription = '';
    let brand = '';
    let price = null;
    let imageUrl = '';

    if (this.editMode){
      const product = this.productListService.getProductById(this.id);
      productName = product.name;
      productDescription = product.description;
      brand = product.brand;
      price = product.price;
      imageUrl = product.imagePath;
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName),
      'imagePath': new FormControl(imageUrl),
      'description': new FormControl(productDescription),
      'brand': new FormControl(brand, Validators.required),
      'price': new FormControl(price)
    })
  }

  onSubmit(){
    const newProduct = new Product(
                            this.productForm.value['name'],
                            this.productForm.value['description'],
                            this.productForm.value['imagePath'],
                            this.productForm.value['price'],
                            this.productForm.value['brand'],
    );

    if (this.editMode){
      this.productListService.updateProduct(this.id, newProduct);
    }else{
      this.productListService.createProduct(newProduct);
    }
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }


}
