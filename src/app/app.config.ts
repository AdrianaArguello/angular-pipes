import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es';
import localEn from '@angular/common/locales/en';
import localPt from '@angular/common/locales/pt';
import { LocaleService } from './services/locale.service';

registerLocaleData(localEn,'en');
registerLocaleData(localPt,'pt');
registerLocaleData(localEs,'es');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale
    },
  ]
};
