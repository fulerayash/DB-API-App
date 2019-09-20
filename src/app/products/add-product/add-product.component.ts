import { Component, OnInit } from '@angular/core';
import { Product } from '../Entities/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent{

  model : Product;


  constructor(private productService: ProductService, private router :Router){
    this.model= new Product();
  }

  saveProduct(){
    console.log(this.model);
    this.productService.addProduct(this.model).subscribe(data=>{
      this.model = data;
      console.log(this.model);
    });
    this.productService.getProducts();
    alert("Product Added");
    this.goBack();
  }
  
  goBack() : void{
    this.router.navigate(['listproducts'])
  }


}
