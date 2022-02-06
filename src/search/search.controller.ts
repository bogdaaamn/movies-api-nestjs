import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { SearchResultPage } from './search.dto';
import { SearchService } from './search.service';

@Controller('search')
@UseInterceptors(CacheInterceptor)
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  @CacheTTL(3600)
  async getSearchResult(
    @Query('query') query: string,
    @Query('page') page?: number,
  ): Promise<SearchResultPage> {
    return await this.searchService.getSearchResult(query, page);
  }
}
