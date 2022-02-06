import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { TmdbService } from '../tmdb/tmdb.service';
import { SearchResultPage } from './search.dto';

@Injectable()
export class SearchService {
  constructor(private tmdbService: TmdbService) {}

  async getSearchResult(
    query: string,
    page?: number,
  ): Promise<SearchResultPage> {
    // Get TMDB search results
    const tmdbResultResponse = await lastValueFrom(
      this.tmdbService.getSearchResult(query, page),
    );

    // Map the individual results to reduce the useless data
    const results = tmdbResultResponse.results.map((result) => {
      return {
        id: result.id,
        vote_average: result.vote_average,
        poster_path: result.poster_path,
        release_date: result.release_date,
        title: result.title,
      };
    });

    // Return the mapped results
    return {
      page: tmdbResultResponse.page,
      results: results,
      total_pages: tmdbResultResponse.total_pages,
      total_results: tmdbResultResponse.total_results,
    };
  }
}
