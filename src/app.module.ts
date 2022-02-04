import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { TmdbService } from './tmdb/tmdb.service';
import { HttpModule } from '@nestjs/axios';
import { SearchController } from './search/search.controller';
import { SearchService } from './search/search.service';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [MoviesController, SearchController],
  providers: [MoviesService, TmdbService, SearchService],
})
export class AppModule {}
