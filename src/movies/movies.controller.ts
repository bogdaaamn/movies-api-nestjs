import { Controller, Get, Param } from '@nestjs/common';
import { Movie } from './movie.interface';

@Controller('movies')
export class MoviesController {
  @Get(':id')
  getMovieById(@Param('id') id: number): Movie {
    // console.log(typeof id);
    return {
      id: id,
      title: 'string',
      tagline: 'string',
      overview: 'string',
      poster_path: 'string',
      release_date: 'string',
      runtime: 100,
    };
  }
}
