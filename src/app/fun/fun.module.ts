import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunComponent } from './fun.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FunComponent],
  imports: [
    CommonModule, SharedModule
  ]
})
export class FunModule { }
