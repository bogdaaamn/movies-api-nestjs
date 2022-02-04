import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { Movie } from '../movie.interface';

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService) {}

  findAll(): any {
    return this.httpService
      .get(`${process.env.TMDB_URL}/movie/550?api_key=${process.env.TMDB_KEY}`)
      .pipe(map((response) => response.data));
  }
}
