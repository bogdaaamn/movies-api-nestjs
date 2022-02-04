import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from './movie.interface';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get(':id')
  getMovieById(@Param('id') id: number): Movie {
    // console.log(typeof id);
    return this.moviesService.getMovieById(id);
  }
}
