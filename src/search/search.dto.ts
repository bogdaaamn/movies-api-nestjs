class SearchResult {
  /**
   * The ID of the movie
   * @example 550
   */
  id: number;

  /**
   * The TMDB rating of the movie
   * @example 8.4
   */
  vote_average: number;

  /**
   * The relative path to the poster of the movie
   * @example "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg"
   */
  poster_path: string;

  /**
   * The release date of the movie as a string
   * @example "1999-10-15"
   */
  release_date: string;

  /**
   * The title of the movie
   * @example "Fight Club"
   */
  title: string;
}

export class SearchResultPage {
  /**
   * The current page of results
   * @example 1
   */
  page: number;

  /**
   * The list of movie metadata matching the query
   *
   */
  results: SearchResult[];

  /**
   * The number of pages
   * @example 100
   */
  total_pages: number;

  /**
   * The number of movies matching the query
   * @example 1982
   */
  total_results: number;
}
