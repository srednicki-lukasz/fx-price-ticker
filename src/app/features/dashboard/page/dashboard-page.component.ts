import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FxPricesService } from 'src/app/core/services';

import { Price } from 'src/app/core/interfaces';

@Component({
	selector: 'dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

	/**
	 * Prices.
	 * @type {Observable<Price[]>}
	 * @memberof DashboardPageComponent
	 */
	prices$: Observable<Price[]>

	/**
	 * Prices loading indicator.
	 * @type {Observable<boolean>}
	 * @memberof DashboardPageComponent
	 */
	pricesLoading$: Observable<boolean>

	constructor(private fxPricesService: FxPricesService) {
		this.prices$ = this.fxPricesService.prices$;
		this.pricesLoading$ = this.fxPricesService.pricesLoading$;
	}

	ngOnInit(): void {
		this.fxPricesService.getAllPrices();
	}
}
