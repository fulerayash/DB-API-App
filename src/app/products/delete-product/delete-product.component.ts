import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Entities/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  error = false; 
  idToDeleteProduct;


  constructor(private route: ActivatedRoute, private serviceProduct: ProductService){

  }
  ngOnChanges(): void {


  }

  confirmDelete(){
    this.serviceProduct.deleteProduct(this.idToDeleteProduct).subscribe(data=>{
      console.log(data);
    });
    alert("Deletion Completed");
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (data) => {
        this.idToDeleteProduct = data.id;
      }
    )
  }
}
