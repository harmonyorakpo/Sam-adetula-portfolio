import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'work',
    loadChildren: () =>
    import('./work/work.module').then(
      m => m.WorkModule
    )
  },
  {
    path: 'fun',
    loadChildren: () => import('./fun/fun.module').then(
      m => m.FunModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
