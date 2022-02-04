import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from './movie.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':id')
  async getMovieById(@Param('id') id: number): Promise<Movie> {
    // console.log(typeof id);
    return await this.moviesService.getMovieById(id);
  }
}
