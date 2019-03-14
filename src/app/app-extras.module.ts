import {
  NgModule
} from '@angular/core';

import {
  AddinClientService
} from '@blackbaud/skyux-lib-addin-client';

import {
  AddCustomerModalComponent
} from './add-customer/add-customer-modal.component';

import {
  MyTileSettingsModalComponent
} from './shared/components/my-tile-settings/my-tile-settings-modal.component';

// Specify entry components, module-level providers, etc. here.
import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  exports: [
    AppSkyModule
  ],
  providers: [
    AddinClientService
  ],
  entryComponents: [
    AddCustomerModalComponent,
    MyTileSettingsModalComponent
  ]
})
export class AppExtrasModule { }
