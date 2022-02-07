import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchResultPage } from './search.dto';
import { SearchService } from './search.service';

@Controller('search')
@ApiTags('search')
@UseInterceptors(CacheInterceptor)
export class SearchController {
  constructor(private searchService: SearchService) {}

  @Get()
  @CacheTTL(3600)
  @ApiOperation({
    description:
      "Search for movies. Gathers data from TMDB's Search Movies public route.",
  })
  @ApiResponse({
    status: 200,
    description: 'The search results of the query requested',
    type: SearchResultPage,
  })
  @ApiResponse({
    status: 422,
    description: 'The query or page parameters are invalid',
  })
  @ApiQuery({ name: 'page', required: false })
  async getSearchResult(
    @Query('query') query: string,
    @Query('page') page?: number,
  ): Promise<SearchResultPage> {
    return await this.searchService.getSearchResult(query, page);
  }
}
