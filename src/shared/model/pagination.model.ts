export interface PaginationModel {
    page: number;
    setPage: Function;
    total: number;
    query: string;
    handleSearch: Function;
  }