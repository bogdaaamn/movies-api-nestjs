import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Movie } from './movies.interface';
import { TmdbService } from '../tmdb/tmdb.service';
import { TmdbMovie, TmdbVideos } from '../tmdb/tmdb.interface';

@Injectable()
export class MoviesService {
  constructor(private tmdbService: TmdbService) {}

  async getMovieById(id: number): Promise<Movie> {
    // Get TMDB movie metadata
    const tmdbMovieResponse: TmdbMovie = await lastValueFrom(
      this.tmdbService.getMovie(id),
    );

    // Get TMDB videos related to the movie
    const tmdbVideosResponse: TmdbVideos = await lastValueFrom(
      this.tmdbService.getVideos(id),
    );

    // Get the best trailer option out of the listed (eg 500, 5004)
    const optimalTrailer = tmdbVideosResponse.results.find((result) => {
      return (
        result.type === 'Trailer' ||
        result.type === 'Teaser' ||
        result.type === 'Clip'
      );
    });

    // Assemble the trailer URL based on site
    let trailerUrl: string;
    if (optimalTrailer) {
      trailerUrl =
        optimalTrailer.site === 'YouTube'
          ? `https://www.youtube.com/watch?v=${optimalTrailer.key}`
          : `https://vimeo.com/${optimalTrailer.key}`;
    } else {
      trailerUrl = null;
    }

    // Return the computed Movie
    return {
      id: tmdbMovieResponse.id,
      title: tmdbMovieResponse.title,
      tagline: tmdbMovieResponse.tagline,
      overview: tmdbMovieResponse.overview,
      poster_path: tmdbMovieResponse.poster_path,
      release_date: tmdbMovieResponse.release_date,
      runtime: tmdbMovieResponse.runtime,
      trailer: trailerUrl,
    };
  }
}
