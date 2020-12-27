import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { CowsComponent } from './cows/cows.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [HomeComponent, CowsComponent, FilterPipe]
})
export class DashboardModule { }
