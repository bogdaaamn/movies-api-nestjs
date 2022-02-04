import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { catchError, map, Observable } from 'rxjs';
import { TmdbMovie, TmdbSearchResult, TmdbVideos } from './tmdb.interface';

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
        catchError((error) => {
          throw new HttpException(error.response.data, error.response.status);
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
        catchError((error) => {
          throw new HttpException(error.response.data, error.response.status);
        }),
      );
  }

  getSearchResult(query: string, page?: number): Observable<TmdbSearchResult> {
    return this.httpService
      .get(`${process.env.TMDB_URL}/search/movie`, {
        params: {
          api_key: process.env.TMDB_KEY,
          query: query,
          page: page || 1,
        },
      })
      .pipe(
        map((response) => response.data),
        catchError((error) => {
          throw new HttpException(error.response.data, error.response.status);
        }),
      );
  }
}
