import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get('/')
  header(): Object {
    return this.service.header();
  };

  @Get('/GetAllMovies/:page')
  async getALLMovies(@Res() res, @Param('page') page: number) {
    const movies = await this.service.getALLMovies(page);
    return res.status(HttpStatus.OK).json({movies: movies[0]});
  };

  @Get('/GetLatestMovies/:page')
  async getLatestReleasesMovies(@Res() res, @Param('page') page: number) {
    const movies = await this.service.getLatestReleasesMoviesList(page);
    return res.status(HttpStatus.OK).json({movies: movies[0]});
  };

  @Get('/GetPopularMovies/:page')
  async getPopularMovies(@Res() res, @Param('page') page: number) {
    const movies = await this.service.getPopularMoviesList(page);
    return res.status(HttpStatus.OK).json({movies: movies[0]});
  };

  @Get('/MoviesByGenre/:genre/:page')
  async moviesByGenres(@Res() res, @Param('genre') genre: string, @Param('page') page: number) {
    const genres = await this.service.getMovieByGenresList(genre, page);
    return res.status(HttpStatus.OK).json({genres: genres[0]});
  };

  @Get('/GetMovieServers/:id([^/]+/[^/]+)')
  async getMovieServers(@Res() res, @Param('id') id: string){
    const servers = await this.service.getMovieServerList(id);
    return res.status(HttpStatus.OK).json({servers: servers});
  };

  @Get('/GetAllSeries/:page')
  async getAllSeries(@Res() res, @Param('page') page: number) {
    const series = await this.service.getALLSeries(page);
    return res.status(HttpStatus.OK).json({series: series[0]});
  };

  @Get('/GetAllServersBySeason/:id([^/]+/[^/]+)/:season')
  async getSeriesServersBySeason(@Res() res, @Param('id') id: string, @Param('season') season: number) {
    const servers = await this.service.getALLServersBySeason(id , Number(season));
    return res.status(HttpStatus.OK).json({servers: servers});
  };

  @Get('/GetLatestSeries/:page')
  async getLatestReleasesSeries(@Res() res, @Param('page') page: number) {
    const series = await this.service.getLatestReleasesSeriesList(page);
    return res.status(HttpStatus.OK).json({series: series[0]});
  };

  @Get('/GetPopularSeries/:page')
  async getPopularSeries(@Res() res, @Param('page') page: number) {
    const series = await this.service.getPopularSeriesList(page);
    return res.status(HttpStatus.OK).json({series: series[0]});
  };

  @Get('/SeriesByGenre/:genre/:page')
  async seriesByGenres(@Res() res, @Param('genre') genre: string, @Param('page') page: number) {
    const genres = await this.service.getSeriesByGenresList(genre, page);
    return res.status(HttpStatus.OK).json({genres: genres[0]});
  };

  
  @Get('/Search/:query')
  async search(@Res() res, @Param('query') query: string) {
    const content = await this.service.searchContent(query);
    return res.status(HttpStatus.OK).json({search: content[0]});
  };

}
