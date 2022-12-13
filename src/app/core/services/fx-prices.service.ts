import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';

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

	/**
	 * Timeout selector.
	 * @type {ReturnType<typeof setTimeout>}
	 * @memberof FxPricesService
	 */
	private timeout!: ReturnType<typeof setTimeout>;

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

	/**
	 * Start ticking latest prices.
	 * @memberof FxPricesService
	 */
	startTickingLatestPrices(instrument: string, interval: number): void {
		this.api.getLatestPrice(instrument)
			.pipe(
				// json-server get request with query returns an array
				// for that reason data is mapped so it matches Price interface instead of Price[]
				map(price => (price as Price[])[0]),
			)
			.subscribe(res => {
				this._prices$.next([res, ...this._prices$.value]);
				this.timeout = setTimeout(() => this.startTickingLatestPrices(instrument, interval), interval);
			})
	}

	/**
	 * Stop ticking latest prices.
	 * @memberof FxPricesService
	 */
	stopTickingLatestPrices(): void {
		clearTimeout(this.timeout);
	}
}
