import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { lastValueFrom } from 'rxjs';
import { TmdbService } from './tmdb.service';

describe('TmdbService', () => {
  let service: TmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule],
      providers: [TmdbService],
    }).compile();

    service = module.get<TmdbService>(TmdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMovie', () => {
    it('should return a movie object', async () => {
      const movie = await lastValueFrom(service.getMovie(550));
      expect(movie).toMatchObject({ title: 'Fight Club', id: 550 });
    });

    it('should throw a HTTP exception', async () => {
      try {
        await lastValueFrom(service.getMovie(1));
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });
  });

  describe('getVideos', () => {
    it('should return a videos object', async () => {
      const movie = await lastValueFrom(service.getVideos(550));
      expect(movie).toMatchObject({ id: 550 });
    });

    it('should throw a HTTP exception', async () => {
      try {
        await lastValueFrom(service.getVideos(1));
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });
  });

  describe('getSearchResult', () => {
    it('should return a result object', async () => {
      const movie = await lastValueFrom(service.getSearchResult('pulp'));
      expect(movie).toMatchObject({ page: 1 });
    });

    it('should throw a HTTP exception for pagination', async () => {
      try {
        await lastValueFrom(service.getSearchResult('pulp', 0));
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });

    it('should throw a HTTP exception for query', async () => {
      try {
        await lastValueFrom(service.getSearchResult(''));
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });
  });
});
