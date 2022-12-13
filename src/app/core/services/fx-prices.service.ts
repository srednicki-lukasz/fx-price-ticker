import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { FxPricesApiService } from '../api/fx-prices-api.service';

import { Price } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class FxPricesService {

	private _prices$: BehaviorSubject<Price[]> = new BehaviorSubject<Price[]>([]);
	private _pricesLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	/**
	 * Prices.
	 * @type {Observable<Price[]>}
	 * @memberof FxPricesService
	 */
	get prices$(): Observable<Price[]> {
		return this._prices$.asObservable();
	}

	/**
	 * Prices loading indicator.
	 * @type {Observable<boolean>}
	 * @memberof FxPricesService
	 */
	get pricesLoading$(): Observable<boolean> {
		return this._pricesLoading$.asObservable();
	}

	constructor(private api: FxPricesApiService) { }

	/**
	 * Get prices.
	 * @memberof FxPricesService
	 */
	getAllPrices(): void {
		this._pricesLoading$.next(true);
		this.api.getAllPrices()
			.subscribe(res => {
				this._prices$.next(res);
				this._pricesLoading$.next(false);
			});
	}
}
