import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import {MatButtonModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {ApplicationModule} from '../application/application.module';



@NgModule({
  declarations: [ProductsListComponent],
  exports: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ApplicationModule,
    MatProgressSpinnerModule
  ]
})
export class ProductsModule { }
