import { TestBed } from '@angular/core/testing';

import { FxPricesService } from './fx-prices.service';

describe('FxPricesService', () => {
	let service: FxPricesService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FxPricesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
