import { ProductsService } from './../../products/products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

constructor(private ProductsService: ProductsService,
  private router: Router) { }
ngOnInit(): void {
  
    
  }

  createProduct(): void {
    this.ProductsService.showMessage('Produto criado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
