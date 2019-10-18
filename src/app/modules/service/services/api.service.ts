import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiService {
  api: string;
  version: string;

  constructor(private http: HttpClient) {
    this.api = environment.api;
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.api}${path}`, { params }).pipe(catchError(this.formatErrors));
  }
}
