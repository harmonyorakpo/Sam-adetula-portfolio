import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import {
  FeegorComponent,
  FreelanceComponent,
  LandaComponent,
  ParkwayComponent,
  SwwipeComponent,
} from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WorkComponent,
    FeegorComponent,
    FreelanceComponent,
    LandaComponent,
    ParkwayComponent,
    SwwipeComponent,
  ],
  imports: [CommonModule, WorkRoutingModule,SharedModule],
})
export class WorkModule {}
