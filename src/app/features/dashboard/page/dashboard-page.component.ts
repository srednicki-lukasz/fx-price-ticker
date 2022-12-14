import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, delay, filter, Observable, take } from 'rxjs';

import { FxPricesService } from 'src/app/core/services';

import { Instruments } from 'src/app/core/enums';
import { Price } from 'src/app/core/interfaces';

@Component({
	selector: 'dashboard-page',
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

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

		combineLatest([this.fxPricesService.prices$, this.fxPricesService.pricesLoading$])
			.pipe(filter(([prices, loading]): boolean => prices.length > 0 && !loading), take(1), delay(5000))
			.subscribe(() => {
				this.fxPricesService.startTickingLatestPrices(Instruments.EUR_JPY, 5000);
				this.fxPricesService.startTickingLatestPrices(Instruments.EUR_USD, 5000);
				this.fxPricesService.startTickingLatestPrices(Instruments.GBP_USD, 5000);
			})
	}

	ngOnDestroy(): void {
		this.fxPricesService.stopTickingLatestPrices();
	}
}
