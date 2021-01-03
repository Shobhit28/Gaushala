import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { VolunteerFilterPipePipe } from './volunteers/volunteer-filter-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [HomeComponent, VolunteersComponent, VolunteerFilterPipePipe]
})
export class DashboardModule { }
