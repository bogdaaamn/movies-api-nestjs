import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Movie } from './movies.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
@ApiTags('movies')
@UseInterceptors(CacheInterceptor)
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':id')
  @CacheTTL(86400)
  @ApiOperation({
    description:
      "Get the metadata information about a movie, including the available trailer URL. Gathers data from TMDB's Get Details and Get Videos public routes.",
  })
  @ApiResponse({
    status: 200,
    description: 'The metadata of the movie requested',
    type: Movie,
  })
  @ApiResponse({
    status: 404,
    description: 'The movie requested is not available',
  })
  async getMovieById(@Param('id') id: number): Promise<Movie> {
    // console.log(typeof id);
    return await this.moviesService.getMovieById(id);
  }
}
