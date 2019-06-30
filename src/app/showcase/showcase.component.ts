import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  products: Product[] = [];

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts(): void {
    this.api.getProductsList()
    .subscribe((data: Product[]) => {
      console.log(data);

      this.products = data;
    })
  }
}
