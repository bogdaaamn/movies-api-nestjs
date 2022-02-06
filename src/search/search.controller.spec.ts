import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TmdbService } from '../tmdb/tmdb.service';
import { SearchController } from './search.controller';
import { SearchResultPage } from './search.dto';
import { SearchService } from './search.service';

describe('SearchController', () => {
  let controller: SearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot(), HttpModule, CacheModule.register()],
      controllers: [SearchController],
      providers: [SearchService, TmdbService],
    }).compile();

    controller = module.get<SearchController>(SearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('GET /search', () => {
    it('should return a result object', async () => {
      expect(typeof (await controller.getSearchResult('pulp'))).toBe('object');
    });

    it('should return a SearchResultPage structure', async () => {
      const searchResult = await controller.getSearchResult('pulp');
      expect(searchResult).toMatchObject<SearchResultPage>({ ...searchResult });
    });

    it('should return working pagination', async () => {
      const searchResult = await controller.getSearchResult('pulp', 2);
      expect(searchResult).toMatchObject({ page: 2 });
    });

    it('should return empty pagination', async () => {
      const searchResult = await controller.getSearchResult('asdasdxxzz');
      expect(searchResult).toMatchObject({ total_pages: 0, total_results: 0 });
    });

    it('should throw HTTP exception', async () => {
      try {
        await controller.getSearchResult('');
      } catch (error) {
        expect(error.message).toBe('Http Exception');
      }
    });
  });
});
