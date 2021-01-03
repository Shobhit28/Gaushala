import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ShedsComponent } from './sheds/sheds.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule
  ],
  declarations: [HomeComponent, ShedsComponent, FilterPipe]
})
export class DashboardModule { }
