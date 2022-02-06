export class Movie {
  /**
   * The ID of the movie
   * @example 550
   */
  id: number;

  /**
   * The title of the movie
   * @example "Fight Club"
   */
  title: string;

  /**
   * Short tagline for the movie
   * @example "Mischief. Mayhem. Soap."
   */
  tagline: string;

  /**
   * The plot of the movie
   * @example "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground fight clubs forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."
   */
  overview: string;

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
   * The duration of the movie in seconds
   * @example 139
   */
  runtime: number;

  /**
   * The URL to the trailer of the movie
   * @example "https://www.youtube.com/watch?v=6JnN1DmbqoU"
   */
  trailer: string;
}
