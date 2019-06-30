import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [ShowcaseComponent, ProductCardComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowcaseComponent],
})
export class ShowcaseModule { }
