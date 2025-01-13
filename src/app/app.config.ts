import { ApplicationConfig, provideZoneChangeDetection, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, MissingTranslationHandler } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateConfigService } from './core/services/translate-config.service';
import { CustomMissingTranslationHandler } from './core/handlers/custom-missing-translation.handler';

export function initializeTranslateService(translateConfigService: TranslateConfigService): () => void {
  return () => translateConfigService.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    ...TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateConfigService.HttpLoaderFactory,
        deps: [HttpClient]
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: CustomMissingTranslationHandler
      }
    }).providers || [],
    {
      provide: APP_INITIALIZER,
      useFactory: initializeTranslateService,
      deps: [TranslateConfigService],
      multi: true
    }
  ],
};