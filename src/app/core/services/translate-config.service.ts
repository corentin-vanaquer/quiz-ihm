import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  
  constructor(private translate: TranslateService) {}

  initialize(): void {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
  }

  static HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }
}
