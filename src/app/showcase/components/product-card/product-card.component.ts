import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnChanges, OnInit {
  @Input() product: Product;
  private _product: Product;
  private count = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const product: SimpleChange = changes.product;
    console.group(`<product-card [change№]=${this.count++}>`);
    console.log('prev:', product.previousValue);
    console.log('curr:', product.currentValue);
    console.log('isFirst:', product.isFirstChange());
    
    this._product = {...product.currentValue, ...{name: product.currentValue.name.toUpperCase()}}
    console.log(this._product);
    console.groupEnd();
  }

  getTimestamp() {
    return (new Date).toLocaleTimeString();
  }

}
