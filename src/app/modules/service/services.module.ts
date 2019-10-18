import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpTokenInterceptor } from './http.interceptor';
import { ApiService, DictionaryService } from './services';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    DictionaryService
  ]
})
export class ServiceModule {}
