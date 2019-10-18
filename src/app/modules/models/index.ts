export interface ITermList {
  word: string;
  definition: string;
}

export interface ITermResponse {
  list: ITermList[];
}

export interface ITermResult {
  isLoading: boolean;
  hasError: boolean;
  result: ITermResponse;
}
