import { Injectable } from '@nestjs/common';
import { Movie } from './movie.interface';

@Injectable()
export class MoviesService {
  getMovieById(id: number): Movie {
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
