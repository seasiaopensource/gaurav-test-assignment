import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headersConfig = {
      'x-rapidapi-host': environment.apiHost,
      'x-rapidapi-key': environment.apiKey
    };

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
