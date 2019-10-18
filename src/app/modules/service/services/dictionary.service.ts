import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ApiService } from '../services/api.service';
import { ITermResponse, ITermResult } from '../../models';

@Injectable()
export class DictionaryService {
  /**
   * Container for the search term
   */
  searchTerm: {
    [key: string]: ITermResult;
  };

  constructor(private apiService: ApiService) {
    this.searchTerm = {};
  }

  /**
   * Returns the Observable of the response
   * @param term string
   */
  fetchRecords(term: string): Observable<ITermResponse> {
    if (this.searchTerm[term] && !this.searchTerm[term].hasError) {
      return of(this.searchTerm[term].result);
    }

    // asign the term
    this.searchTerm[term] = { isLoading: true, hasError: false, result: { list: [] } };

    const params: Params = { term };
    return this.apiService.get('define', new HttpParams({ fromObject: { ...params } })).pipe(
      catchError((error) => {
        this.searchTerm[term].isLoading = false;
        this.searchTerm[term].hasError = true;
        return throwError(error);
      }),
      map((response: ITermResponse) => {
        this.searchTerm[term].isLoading = false;
        this.searchTerm[term].result = response;
        return response;
      })
    );
  }
}
