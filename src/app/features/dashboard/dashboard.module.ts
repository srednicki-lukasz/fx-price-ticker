import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardPageComponent } from './page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { components } from './components';

import { MatTableModule } from '@angular/material/table';

@NgModule({
	declarations: [
		DashboardPageComponent,
		...components
	],
	imports: [
		CommonModule,
		DashboardRoutingModule,
		MatTableModule
	],
})
export class DashboardModule { }
