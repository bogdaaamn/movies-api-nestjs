import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { TmdbService } from './tmdb/tmdb.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService, TmdbService],
})
export class AppModule {}
