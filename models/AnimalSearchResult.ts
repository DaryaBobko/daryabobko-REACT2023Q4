export interface AnimalSearchResult {
  page: Page;
  sort: Sort;
  animals: Animal[];
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
}

export interface Sort {
  clauses: unknown[];
}

export interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
}

export interface AnimalDetails {
  animal: {
    uid: string;
    name: string;
    earthAnimal: boolean;
    earthInsect: boolean;
    avian: boolean;
    canine: boolean;
    feline: boolean;
  };
}
