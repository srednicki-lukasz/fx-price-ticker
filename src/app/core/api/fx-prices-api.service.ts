import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Price } from '../interfaces';

@Injectable({
	providedIn: 'root'
})
export class FxPricesApiService {

	constructor(private http: HttpClient) { }

	/**
	 * Get all prices.
	 * @memberof FxPricesApiService
	 */
	getAllPrices(): Observable<Price[]> {
		return this.http.get<Price[]>(environment.api + '/api/prices');
	}

	/**
	 * Get latest instrument price.
	 * @memberof FxPricesApiService
	 */
	getLatestPrice(instrument: string): Observable<Price> {
		const options = { params: { instrument } };
		return this.http.get<Price>(environment.api + '/api/latest', options)
	}
}
