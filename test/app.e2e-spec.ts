import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
//import request = require('supertest');
import chai from 'chai';
import chaiHttp from 'chai-http';
const { expect } = chai;
import { AppModule } from './../src/app.module';

chai.use(chaiHttp);

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
   
  it('GET Method /v1/GetAllMovies/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetAllMovies/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetLatestMovies/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetLatestMovies/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetPopularMovies/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetPopularMovies/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/MoviesByGenre/:[genre]/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/MoviesByGenre/accion/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.movies).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetMovieServers/:[id]/:[season]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetMovieServers/pelicula/frozen-ii')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.servers).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetAllSeries/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetAllSeries/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.series).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetLatestSeries/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetLatestSeries/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.series).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetPopularSeries/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetPopularSeries/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.series).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/SeriesByGenre/:[genre]/:[page]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/SeriesByGenre/accion/1')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.series).to.be.an('array');
      })
      ok();
  });
  it('GET Method /v1/GetAllServersBySeason/:[id]/:[season]' , ok =>{
    chai
      .request(app.getHttpServer())
      .get('/GetAllServersBySeason/serie/game-of-thrones/8')
      .end((err, res) =>{
        expect(res).to.have.status(200);
        expect(res.body.servers).to.be.an('array');
      })
      ok();
  });
});
