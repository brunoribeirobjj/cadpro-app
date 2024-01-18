import { Product } from './../product.model';
import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

Product: Product = {
  name: '',
  price: null
}

constructor(private ProductsService: ProductsService,
  private router: Router) { }

  ngOnInit(): void {
  
    
  }

  createProduct(): void {
    this.ProductsService.create(this.Product).subscribe(() => {
      this.ProductsService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
