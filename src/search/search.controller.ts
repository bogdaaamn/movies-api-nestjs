import { Controller, Get, Query } from '@nestjs/common';
import { SearchResultPage } from './search.interface';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  async getSearchResult(
    @Query('query') query: string,
    @Query('page') page?: number,
  ): Promise<SearchResultPage> {
    return await this.searchService.getSearchResult(query, page);
  }
}
