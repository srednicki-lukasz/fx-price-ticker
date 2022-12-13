import { Component, Input } from '@angular/core';

import { Price } from 'src/app/core/interfaces';

@Component({
	selector: 'fx-prices-table',
	templateUrl: './fx-prices-table.component.html',
	styleUrls: ['./fx-prices-table.component.css']
})
export class FxPricesTableComponent {

	/**
	 * Prices.
	 * @type {Price[]}
	 * @memberof FxPricesTableComponent
	 */
	@Input() prices!: Price[];

	/**
	 * Prices loading indicator.
	 * @type {boolean}
	 * @memberof FxPricesTableComponent
	 */
	@Input() pricesLoading!: boolean;

	/**
	 * Table columns.
	 * @type {string[]}
	 * @memberof FxPricesTableComponent
	 */
	columns: string[] = ['index', 'instrument', 'bid', 'ask', 'timestamp'];

	constructor() { }
}
