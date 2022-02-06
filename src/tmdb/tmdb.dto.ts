class Genre {
  id: number;
  name: string;
}

class ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

class ProductionCountry {
  iso_3166_1: string;
  name: string;
}

class SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export class TmdbMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

class Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

export class TmdbVideos {
  id: number;
  results: Video[];
}

class Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export class TmdbSearchResult {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}
