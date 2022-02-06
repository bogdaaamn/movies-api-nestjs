import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable, Logger } from '@nestjs/common';
import { catchError, map, Observable, tap } from 'rxjs';
import { TmdbMovie, TmdbSearchResult, TmdbVideos } from './tmdb.dto';

@Injectable()
export class TmdbService {
  private logger: Logger = new Logger('Axios');

  constructor(private httpService: HttpService) {}

  // https://api.themoviedb.org/3/movie/:id
  getMovie(id: number): Observable<TmdbMovie> {
    return this.httpService
      .get(`${process.env.TMDB_URL}/movie/${id}`, {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      })
      .pipe(
        tap((response) =>
          this.logger.log(
            `${response.status} ${response.config.method} ${response.config.url} `,
          ),
        ),
        map((response) => response.data),
        catchError((error) => {
          this.logger.log(
            `${error.response.status} ${error.response.config.method} ${error.response.config.url} `,
          );

          throw new HttpException(error.response.data, error.response.status);
        }),
      );
  }

  // https://api.themoviedb.org/3/movie/:id/videos
  getVideos(id: number): Observable<TmdbVideos> {
    return this.httpService
      .get(`${process.env.TMDB_URL}/movie/${id}/videos`, {
        params: {
          api_key: process.env.TMDB_KEY,
        },
      })
      .pipe(
        tap((response) =>
          this.logger.log(
            `${response.status} ${response.config.method} ${response.config.url} `,
          ),
        ),
        map((response) => response.data),
        catchError((error) => {
          this.logger.log(
            `${error.response.status} ${error.response.config.method} ${error.response.config.url} `,
          );

          throw new HttpException(error.response.data, error.response.status);
        }),
      );
  }

  // https://api.themoviedb.org/3/search/movie
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
        tap((response) =>
          this.logger.log(
            `${response.status} ${response.config.method} ${response.config.url} `,
          ),
        ),
        map((response) => response.data),
        catchError((error) => {
          this.logger.log(
            `${error.response.status} ${error.response.config.method} ${error.response.config.url} `,
          );

          throw new HttpException(error.response.data, error.response.status);
        }),
      );
  }
}
