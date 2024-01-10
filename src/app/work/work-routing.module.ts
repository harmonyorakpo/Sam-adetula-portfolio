import { RouterModule, Routes } from "@angular/router";
import { WorkComponent } from "./work.component";
import { FeegorComponent } from "./feegor/feegor.component";
import { FreelanceComponent } from "./freelance/freelance.component";
import { LandaComponent } from "./landa/landa.component";
import { SwwipeComponent } from "./swwipe/swwipe.component";
import { ParkwayComponent } from "./parkway/parkway.component";
import { NgModule } from "@angular/core";

export const _WORK_ROUTES: Routes = [

  {
    path: 'feegor',
    component: FeegorComponent,

  },
  {
    path: 'freelance',
    component: FreelanceComponent,
  },
  {
    path: 'landa',
    component: LandaComponent,

  },
{
  path: 'parkway',
  component: ParkwayComponent
},
  {
    path: 'swwipe',
    component: SwwipeComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: WorkComponent,
    children: _WORK_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class WorkRoutingModule {}