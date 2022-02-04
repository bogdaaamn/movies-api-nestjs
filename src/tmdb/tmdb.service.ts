import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { TmdbMovie, TmdbVideos } from './tmdb.interface';

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService) {}

  getMovie(id: number): Observable<TmdbMovie> {
    return this.httpService
      .get(`${process.env.TMDB_URL}/movie/${id}`, {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }

  getVideos(id: number): Observable<TmdbVideos> {
    return this.httpService
      .get(`${process.env.TMDB_URL}/movie/${id}/videos`, {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }
}
