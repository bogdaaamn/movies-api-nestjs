import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { Movie } from './movies.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
@UseInterceptors(CacheInterceptor)
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':id')
  @CacheTTL(86400)
  async getMovieById(@Param('id') id: number): Promise<Movie> {
    // console.log(typeof id);
    return await this.moviesService.getMovieById(id);
  }
}
