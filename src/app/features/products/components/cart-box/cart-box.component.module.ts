import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartBoxComponent } from './cart-box.component';


@NgModule({
  declarations: [
    CartBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CartBoxComponent
  ]
})
export class CartBoxComponentModule { }
