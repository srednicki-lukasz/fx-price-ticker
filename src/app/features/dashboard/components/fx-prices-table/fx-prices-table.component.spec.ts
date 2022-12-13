import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxPricesTableComponent } from './fx-prices-table.component';

describe('FxPricesTableComponent', () => {
	let component: FxPricesTableComponent;
	let fixture: ComponentFixture<FxPricesTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FxPricesTableComponent]
		})
			.compileComponents();

		fixture = TestBed.createComponent(FxPricesTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
