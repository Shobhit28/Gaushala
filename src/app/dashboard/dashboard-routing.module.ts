import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CowsComponent } from './cows/cows.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'cows',
    component: CowsComponent
  }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
