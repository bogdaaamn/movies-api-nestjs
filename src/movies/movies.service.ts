import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Movie } from './movie.interface';
import { TmdbService } from './tmdb/tmdb.service';

@Injectable()
export class MoviesService {
  constructor(private tmdbService: TmdbService) {}

  async getMovieById(id: number): Promise<Movie> {
    console.log(await lastValueFrom(this.tmdbService.findAll()));

    return {
      id: id,
      title: 'string',
      tagline: 'string',
      overview: 'string',
      poster_path: 'string',
      release_date: 'string',
      runtime: 100,
    };
  }
}
