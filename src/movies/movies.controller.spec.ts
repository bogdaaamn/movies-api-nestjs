import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';

describe('MoviesController', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /movie/:id', () => {
    // it should return status 200
    it('should return status 200', () => {
      expect(controller.getHello()).toBe('Hello World!');
    });
    // it should return a movie object
    // it should return the matching id
    // it should return *the* movie structure
    // it should return 404
  });

  describe('/search route', () => {
    // it should return status 200
    // it should return a search result object
    // is should contain movies
    // it should return the results structure
    // it should return 404
  });
});
