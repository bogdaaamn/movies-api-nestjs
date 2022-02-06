class SearchResult {
  id: number;
  vote_average: number;
  poster_path: string;
  release_date: string;
  title: string;
}

export class SearchResultPage {
  page: number;
  results: SearchResult[];
  total_pages: number;
  total_results: number;
}
