import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/movies (200)', () => {
    return request(app.getHttpServer()).get('/movies/550').expect(200).expect({
      id: 550,
      title: 'Fight Club',
      tagline: 'Mischief. Mayhem. Soap.',
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      release_date: '1999-10-15',
      runtime: 139,
      trailer: 'https://www.youtube.com/watch?v=6JnN1DmbqoU',
    });
  });

  it('/movies (404)', () => {
    return request(app.getHttpServer()).get('/movies/asd').expect(404);
  });

  it('/search (200)', () => {
    return request(app.getHttpServer()).get('/search?query=pulp').expect(200);
  });

  it('/search (422)', () => {
    return request(app.getHttpServer()).get('/search?query=').expect(422);
  });

  it('/search (422)', () => {
    return request(app.getHttpServer())
      .get('/search?query=pulp&page=0')
      .expect(422);
  });
});
