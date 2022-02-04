import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { TmdbMovie } from './tmdbMovie.interface';

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService) {}

  getMovie(id: number): Observable<TmdbMovie> {
    return this.httpService
      .get(
        `${process.env.TMDB_URL}/movie/${id}?api_key=${process.env.TMDB_KEY}`,
      )
      .pipe(map((response) => response.data));
  }
}
