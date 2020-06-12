import {
  NgModule
} from '@angular/core';

import {
  SkyPageModule
} from '@skyux/layout';

import {
  SkyAlertModule
} from '@skyux/indicators';

@NgModule({
  exports: [
    SkyAlertModule,
    SkyPageModule
  ]
})
export class AppSkyModule { }
