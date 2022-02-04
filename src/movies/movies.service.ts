import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Movie } from './movie.interface';
import { TmdbService } from './tmdb/tmdb.service';
import { TmdbMovie } from './tmdb/tmdbMovie.interface';

@Injectable()
export class MoviesService {
  constructor(private tmdbService: TmdbService) {}

  async getMovieById(id: number): Promise<Movie> {
    const tmdbResponse: TmdbMovie = await lastValueFrom(
      this.tmdbService.getMovie(id),
    );

    return {
      id: tmdbResponse.id,
      title: tmdbResponse.title,
      tagline: tmdbResponse.tagline,
      overview: tmdbResponse.overview,
      poster_path: tmdbResponse.poster_path,
      release_date: tmdbResponse.release_date,
      runtime: tmdbResponse.runtime,
    };
  }
}
