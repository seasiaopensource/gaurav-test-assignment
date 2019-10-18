import { Component } from '@angular/core';
import { DictionaryService } from '../../modules/service/services/dictionary.service';
import { ITermList, ITermResult } from '../../modules/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent {
  search: string;
  constructor(private dictionaryService: DictionaryService) {}

  get searchResults(): ITermResult {
    return this.dictionaryService.searchTerm[this.search];
  }

  get isLoadingSearchTerm(): boolean {
    return this.searchResults && this.searchResults.isLoading;
  }

  get hasErrorSearchTerm(): boolean {
    return this.searchResults && this.searchResults.hasError;
  }

  get records(): ITermList[] {
    return (
      this.searchResults &&
      !this.isLoadingSearchTerm &&
      this.searchResults.result &&
      this.searchResults.result.list
    );
  }

  onInputChange(term: string): void {
    if (term) {
      this.dictionaryService.fetchRecords(term).subscribe();
    }
  }
}
