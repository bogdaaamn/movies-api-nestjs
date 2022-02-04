import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TmdbService } from '../tmdb/tmdb.service';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

describe('MoviesController', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      controllers: [MoviesController],
      providers: [MoviesService, TmdbService],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /movie/:id', () => {
    it('should return a movie object', async () => {
      expect(typeof (await controller.getMovieById(123))).toBe('object');
    });

    it('should return the matching id', async () => {
      const movie = await controller.getMovieById(123);
      expect(movie.id).toBe(123);
    });

    // it should return *the* movie structure
    // it should return status 200
    // it should return 404
  });

  describe('/search route', () => {
    // it should return a search result object
    // is should contain movies
    // it should return the results structure
    // it should return status 200
    // it should return 404
  });
});
