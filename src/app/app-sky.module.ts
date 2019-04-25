import {
  NgModule
} from '@angular/core';

import {
  SkyCheckboxModule
} from '@skyux/forms';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyAlertModule
} from '@skyux/indicators';

@NgModule({
  exports: [
    SkyCheckboxModule,
    SkyI18nModule,
    SkyAlertModule
  ]
})
export class AppSkyModule { }
