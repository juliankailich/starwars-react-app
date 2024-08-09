export interface ApiResponse {
    data: {
      count: number;
      next: number;
      previous: string;
      results: Array<any>;
    };
  }