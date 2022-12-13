import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
		if (parentModule) {
			throw new Error('CoreModule Is Already Loaded. Import It In The AppModule Only.');
		}
	}
}
