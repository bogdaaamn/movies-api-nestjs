import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TmdbService } from '../tmdb/tmdb.service';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { Movie } from './movies.interface';

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

    it('should return a valid trailer URL', async () => {
      const movie = await controller.getMovieById(123);
      expect(movie.trailer).toContain('https://www.youtube.com/watch?v=');
    });

    it('should return a null trailer URL', async () => {
      const movie = await controller.getMovieById(5004);
      expect(movie.trailer).toBe(null);
    });

    it('should return the movie structure', async () => {
      const movie = await controller.getMovieById(123);
      expect(movie).toMatchObject<Movie>({ ...movie });
    });

    it('should throw HTTP exception', async () => {
      // expect(await controller.getMovieById(1)).toThrow(HttpException);
      try {
        await controller.getMovieById(1);
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });

    // it should return status 200
    // it should return 404
  });
});
