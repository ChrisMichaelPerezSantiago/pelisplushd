import { Injectable } from '@nestjs/common';
import {
  getAllMovies,
  getMovieServers,
  getLatestReleasesMovies,
  getPopularMovies,
  moviesByGenres,
  getAllSeries,
  getSeriesServersBySeason,
  getLatestReleasesSeries,
  getPopularSeries,
  seriesByGenres,
  search
} from './api/api';
import { IServers } from './api/interfaces/IServers';
import { ISerieServerRootObj } from './api/interfaces/ISerieServerRootObj';

@Injectable()
export class AppService {
  header(): Object {
    return{ 
      message: "Pelisplushd API - 👋🌎🌍🌏",
      author: "Chris Michael",
      entries:{
        'GetAllMovies': '/v1/GetAllMovies/:page',
        'GetLatestMovies': '/v1/GetLatestMovies/:page',
        'GetPopularMovies': '/v1/GetPopularMovies/:page',
        'MoviesByGenre': '/v1/MoviesByGenre/:genre/:page',
        'GetMovieServers': '/v1/GetMovieServers/:id',
        'GetAllSeries': '/v1/GetAllSeries/:page',
        'GetAllServersBySeason': '/v1/GetAllServersBySeason/:id/:season',
        'GetLatestSeries': '/v1/GetLatestSeries/:page',
        'GetPopularSeries': '/v1/GetPopularSeries/:page',
        'SeriesByGenre': '/v1/SeriesByGenre/:genre/:page',
        'Search': '/v1/Search/:query'
      }
    }
  };
  
  async getALLMovies(page:  number): Promise<CheerioElement[]>{
    return getAllMovies(page)
      .then(res =>{
        return res;
      });
  };

  async getLatestReleasesMoviesList(page: number): Promise<CheerioElement[]>{
    return getLatestReleasesMovies(page)
      .then(res =>{
        return res;
      });
  };

  async getPopularMoviesList(page: number): Promise<CheerioElement[]>{
    return getPopularMovies(page)
      .then(res =>{
        return res;
      });
  };

  async getMovieByGenresList(genre: string, page: number): Promise<CheerioElement[]>{
    return moviesByGenres(genre, page)
      .then(res =>{
        return res;
      });
  };

  async getMovieServerList(id: string): Promise<IServers[]>{
    return getMovieServers(id)
      .then(res =>{
        return res;
      });
  };

  async getALLSeries(page:  number): Promise<CheerioElement[]>{
    return getAllSeries(page)
      .then(res =>{
        return res;
      });
  };

  async getALLServersBySeason(id: string, season: number): Promise<ISerieServerRootObj[]>{
    return getSeriesServersBySeason(id , season)
      .then(res =>{
        return res;
      });
  };

  async getLatestReleasesSeriesList(page: number): Promise<CheerioElement[]>{
    return getLatestReleasesSeries(page)
      .then(res =>{
        return res;
      });
  };

  async getPopularSeriesList(page: number): Promise<CheerioElement[]>{
    return getPopularSeries(page)
      .then(res =>{
        return res;
      });
  };

  async getSeriesByGenresList(genre: string, page: number): Promise<CheerioElement[]>{
    return seriesByGenres(genre, page)
      .then(res =>{
        return res;
      });
  };

  async searchContent(query: string): Promise<CheerioElement[]>{
    return search(query)
      .then(res =>{
        return res;
      });
  };
}
