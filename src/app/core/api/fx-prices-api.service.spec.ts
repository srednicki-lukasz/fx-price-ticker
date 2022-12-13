import { TestBed } from '@angular/core/testing';

import { FxPricesApiService } from './fx-prices-api.service';

describe('FxPricesApiService', () => {
	let service: FxPricesApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(FxPricesApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
