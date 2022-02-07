# DEPT Movies API Nestjs

## Description

A movies API that provides basic information provided by TMDB. Built with [Nestjs](https://github.com/nestjs/nest).

## API References

Read the full documentation and interactive examples at https://quiet-depths-21248.herokuapp.com/docs/. 

### `GET /movies/:id`

Get the metadata information about a movie, including the available trailer URL. Gathers data from TMDB's [Get Details](https://developers.themoviedb.org/3/movies/get-movie-details) and [Get Videos](https://developers.themoviedb.org/3/movies/get-movie-videos) public routes.

### Path parameters

- `id`: The ID of the movie as seen in TMDB. **Required**

### Request

```
GET /movies/500
```

### Response

<details>
  <summary><b>200 OK</b></summary>
  
  ```json
  {
      "id": 500,
      "title": "Reservoir Dogs",
      "tagline": "Every dog has his day.",
      "overview": "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
      "poster_path": "/lsBnfheKZBO3UKU7lVHIeGZLWuF.jpg",
      "release_date": "1992-09-02",
      "runtime": 99,
      "trailer": "https://www.youtube.com/watch?v=GLPJSmUHZvU"
  }
  ```
</details>

<details>
  <summary><b>404 Not Found</b></summary>
  
  ```json
  {
      "success": false,
      "status_code": 34,
      "status_message": "The resource you requested could not be found."
  }
  ```
</details>

### `GET /search`

Search for movies. Gathers data from TMDB's Search Movies public route.

#### Query parameters

- `query`: The text query to search. **Required**
- `page`: The page number to query. **Default: 1**

#### Request

```
GET /search?query=fight&page=1
```

#### Response

<details>
  <summary><b>200 OK: Valid query</b></summary>
  
  ```json
  {
    "page": 1,
    "results": [
        {
            "id": 550,
            "vote_average": 8.4,
            "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            "release_date": "1999-10-15",
            "title": "Fight Club"
        },
        {
            "id": 629017,
            "vote_average": 6.7,
            "poster_path": "/wlP25H14OvKoFORIwuKomZzioA5.jpg",
            "release_date": "2020-09-10",
            "title": "Run Hide Fight"
        },
        {
            "id": 345922,
            "vote_average": 6.1,
            "poster_path": "/huRhv4IZDk2ds0DIDkI6uxdmb6J.jpg",
            "release_date": "2017-02-16",
            "title": "Fist Fight"
        },
        {
            "id": 682377,
            "vote_average": 5.9,
            "poster_path": "/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg",
            "release_date": "2020-11-13",
            "title": "Chick Fight"
        },
        {
            "id": 924987,
            "vote_average": 0,
            "poster_path": "/2DhlrTgYAENQGvfH8ZNgXgmACfE.jpg",
            "release_date": "2022-02-05",
            "title": "UFC Fight Night 200: Hermansson vs. Strickland"
        },
        {
            "id": 440777,
            "vote_average": 6.5,
            "poster_path": "/iI9c8XNdPuwB4RYbHMd62QNhoRK.jpg",
            "release_date": "2017-03-16",
            "title": "Female Fight Squad"
        },
        {
            "id": 14286,
            "vote_average": 7.6,
            "poster_path": "/kfOmnlwt1rrhxmxc05X3i9mHSOs.jpg",
            "release_date": "2005-01-01",
            "title": "Why We Fight"
        },
        {
            "id": 385383,
            "vote_average": 3.6,
            "poster_path": "/jIPWkzF9srlU8eZTldLM6JYZwkO.jpg",
            "release_date": "2016-07-22",
            "title": "Fight Valley"
        },
        {
            "id": 559578,
            "vote_average": 4.4,
            "poster_path": "/y0QXD8zSxpBsyQSKN9mg5diYexV.jpg",
            "release_date": "2018-11-06",
            "title": "Alone We Fight"
        },
        {
            "id": 325365,
            "vote_average": 6.5,
            "poster_path": "/thgvd0tjDLJvTVx4BaZjfQAC7yK.jpg",
            "release_date": "2015-03-13",
            "title": "Dawg Fight"
        },
        {
            "id": 55461,
            "vote_average": 7.2,
            "poster_path": "/r5TUs76PbO68b6qmHgWjw4Nsz39.jpg",
            "release_date": "1942-04-10",
            "title": "Donald's Snow Fight"
        },
        {
            "id": 883656,
            "vote_average": 0,
            "poster_path": "/a9RWdhRLyx3BqCjlwmZJHXyeMkR.jpg",
            "release_date": "2021-10-09",
            "title": "GCW Fight Club"
        },
        {
            "id": 196355,
            "vote_average": 6.6,
            "poster_path": "/zbAWQ41NPaWbN0deyMuxF1ustmj.jpg",
            "release_date": "2013-10-04",
            "title": "Muhammad Ali's Greatest Fight"
        },
        {
            "id": 108251,
            "vote_average": 6.2,
            "poster_path": "/mie2uVWWI2iNlkSdHaOjk1J3irW.jpg",
            "release_date": "2011-10-03",
            "title": "Girl Fight"
        },
        {
            "id": 488971,
            "vote_average": 5.5,
            "poster_path": "/qeceU9AsdHu9H6ZZax4MfeDj7A7.jpg",
            "release_date": "2017-11-01",
            "title": "You Can't Fight Christmas"
        },
        {
            "id": 148526,
            "vote_average": 4.6,
            "poster_path": "/qVyOyga4g4QlMTmcyCbmtQC6Et9.jpg",
            "release_date": "2011-08-31",
            "title": "Forced To Fight"
        },
        {
            "id": 372631,
            "vote_average": 5.9,
            "poster_path": "/2StM8Vavf7ukvuj9mxg1o7nKxmi.jpg",
            "release_date": "2015-12-15",
            "title": "Marvel Super Hero Adventures: Frost Fight!"
        },
        {
            "id": 62328,
            "vote_average": 6.4,
            "poster_path": "/1WcxVQBsXG6EQlNJd8vcF4oFTg4.jpg",
            "release_date": "1993-05-05",
            "title": "Shootfighter: Fight to the Death"
        },
        {
            "id": 33274,
            "vote_average": 4.1,
            "poster_path": "/mbSW30poDgsjEVXWQdh9So5k8sf.jpg",
            "release_date": "2009-02-03",
            "title": "Street Fighter: Round One - FIGHT!"
        },
        {
            "id": 888652,
            "vote_average": 6.6,
            "poster_path": "/5TNSfR1OdcNHMnJV7QczdqdfaGR.jpg",
            "release_date": "2021-11-24",
            "title": "'Twas the Fight Before Christmas"
        }
    ],
    "total_pages": 100,
    "total_results": 1982
  }
  ```
</details>

<details>
  <summary><b>200 OK: Empty pagination</b></summary>
  
  ```json
  {
    "page": 1,
    "results": [],
    "total_pages": 0,
    "total_results": 0
  }
  ```
</details>

<details>
  <summary><b>422 Unprocessable Entity: Empty query</b></summary>
  
  ```json
  {
    "errors": [
      "query must be provided"
    ]
  }
  ```
</details>

<details>
  <summary><b>422 Unprocessable Entity: Wrong pagination</b></summary>
  
  ```json
  {
    "errors": [
      "page must be greater than 0"
    ]
  }
  ```
</details>


## Development
### Installation

```bash
$ git clone https://github.com/BogDAAAMN/movies-api-nestjs/
$ npm install
```

⚠️ Create and edit an `.env` file, as seen in [`.env.example`](/.env.example).

https://github.com/BogDAAAMN/movies-api-nestjs/blob/d8b6f7405e9ba5164bd46c2f0eb9b251c47379f5/.env.example#L1-L2
  
You can get your `TMDB_KEY` API key by logging in to your [TMDB account](https://www.themoviedb.org/settings/account) and clicking the [API link](https://www.themoviedb.org/settings/api) of your account page. More details and screenshots on the [TMDB API Docs](https://developers.themoviedb.org/3/getting-started/introduction).

### Development

```bash
# watch mode
$ npm run start:dev
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

The current unit tests coverage: (generated by [istanbul](https://istanbul.js.org/)) 

```
-----------------------|---------|----------|---------|---------|-
File                   | % Stmts | % Branch | % Funcs | % Lines | 
-----------------------|---------|----------|---------|---------|-
 src/movies            |     100 |    57.14 |     100 |     100 | 
  movies.controller.ts |     100 |      100 |     100 |     100 | 
  movies.service.ts    |     100 |    57.14 |     100 |     100 | 
 src/search            |     100 |      100 |     100 |     100 | 
  search.controller.ts |     100 |      100 |     100 |     100 | 
  search.service.ts    |     100 |      100 |     100 |     100 | 
 src/tmdb              |     100 |      100 |     100 |     100 | 
  tmdb.service.ts      |     100 |      100 |     100 |     100 | 
-----------------------|---------|----------|---------|---------|-
```

### Cache

The API uses the Nest built-in in-memory caching system. The data is stored in to the application's memory and it is served before making TMDB API requests (if possible). The current cache configuration is:

- `ttl`: 
  - 86400 for `/movies`
  - 3600 for `/search`
- `max`: 100k

Latency benchmark for `/movies` route (generated by [autocannon](https://github.com/mcollina/autocannon)):

```
Running 10s test @ http://localhost:3000/movies/550
10 connections
┌───────────────────┬────────┬────────┬────────┬────────┬───────────┬──────────┐
│ Stat              │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │
├───────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ Non-cache Latency │ 103 ms │ 119 ms │ 187 ms │ 194 ms │ 124.17 ms │ 22.96 ms │
├───────────────────┼────────┼────────┼────────┼────────┼───────────┼──────────┤
│ Cache Latency     │   3 ms │   5 ms │  11 ms │  13 ms │   5.19 ms │  5.38 ms │
└───────────────────┴────────┴────────┴────────┴────────┴───────────┴──────────┘

- Non-cache: 166 requests in 10.02s,  123 kB read
- Cache:     18k requests in 10.01s, 13.9 MB read
```

### Security

hey

## Deploy

### CI Workflow

The GitHub Actions workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs the linter (`npm run lint`), the unit tests (`npm run test`), and the e2e tests (`npm run test:e2e`) for each push on the main branch. 

⚠️ In order to allow the tests to run, they need the `TMDB_KEY` and `TMDB_URL` env variables. They are already set in the workflows (as seen below), but you need to make sure you set `TMDB_KEY` as a secret in your repository. See [Creating encrypted secrets for a repository](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository).

https://github.com/BogDAAAMN/movies-api-nestjs/blob/d8b6f7405e9ba5164bd46c2f0eb9b251c47379f5/.github/workflows/ci.yml#L11-L12

Take note that the Heroku deployment will wait until the CI tests are passed. So there will be no un-linted or un-tested code pushed to Heroku. If the tests are failing the deployment is stopped and you'll be notified. 

### Heroku

You can deploy the project by connecting the GitHub project to a fresh new Heroku project, see [Enabling GitHub Integration](https://devcenter.heroku.com/articles/github-integration#enabling-github-integration). 

⚠️ You will have to manually setup the `TMDB_KEY` and `TMDB_URL` env variables into Heroku Dashboard (see [Configuration and Config Vars](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)) or run the CLI commands: 

```bash
heroku config:set TMDB_KEY=key-here
heroku config:set TMDB_URL=https://api.themoviedb.org/3
```

Or simply use the **Deploy to Heroku** button and complete the missing Config Vars on the screen:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/BogDAAAMN/movies-api-nestjs/)

Currently the project is hosted on Heroku under https://quiet-depths-21248.herokuapp.com/docs.

## License

- Nest is [MIT licensed](LICENSE).
- TMDb offers the API service for free as long as you properly attribute the source of the data and/or images used.
