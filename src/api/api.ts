import { ISeries } from './interfaces/ISeries';
import { load } from 'cheerio';
import axios from 'axios';
import { IMovies } from './interfaces/IMovies';
import { IServers } from './interfaces/IServers';
import { ISerieServerRootObj } from './interfaces/ISerieServerRootObj';
import { 
  urlify, 
  sleep
} from './utils/index';
import { 
  BASE_URL
} from './url/index';


export const search = async(query: string) =>{
  const res = await axios.get(`${BASE_URL}search/?s=${query}`);
  const body = await res.data;
  const $ = load(body);
  const union: (ISeries | IMovies)[] = [];

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id)
      union.push({
        id: id || null,
        title: title || null,
        poster: poster || null,
        year: extra.promises[0].year || null,
        seasons: extra.seasons || null,
        genres: extra.promises[0].genres || null,
        rating: extra.promises[0].rating || null,
        synopsis: extra.promises[0].synopsis || null,
        authors: extra.promises[0].authors || null,
        director: extra.promises[0].director || null,
        writers: extra.promises[0].writers || null,
        country: extra.promises[0].country || null,
        releaseDate: extra.promises[0].releaseDate || null,
        promo: extra.promises[0].promo || null
    });    
    resolve(union);
  }));
  
  return Promise.all(promise.toArray());
}

export const seriesByGenres = async(genre: string, page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}series/generos/${genre}/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: ISeries[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      seasons: extra.seasons || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getPopularSeries = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}series/populares/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: ISeries[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      seasons: extra.seasons || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getLatestReleasesSeries = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}series/estrenos/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: ISeries[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      seasons: extra.seasons || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getAllSeries = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}series/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: ISeries[] = [];  

  //const actual = page;
  //const lastPage = parseInt($('body div.app div.layout ul.pagination li').eq(4).find('a').attr('href').match(/\d/g).join("") , 10);
  //const pagination = {
  //  actual: actual,
  //  last: lastPage
  //}

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      seasons: extra.seasons || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const moviesByGenres = async(genre: string, page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}peliculas/generos/${genre}/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: IMovies[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getPopularMovies = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}peliculas/populares/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: IMovies[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getLatestReleasesMovies = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}peliculas/estrenos/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: IMovies[] = [];  

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

export const getAllMovies = async(page: number): Promise<CheerioElement[]> =>{
  const res = await axios.get(`${BASE_URL}peliculas/${page}`);
  const body = await res.data;
  const $ = load(body);
  const promises: IMovies[] = [];  

  //const actual = page;
  //const lastPage = parseInt($('body div.app div.layout ul.pagination li').eq(4).find('a').attr('href').match(/\d/g).join("") , 10);
  //const pagination = {
  //  actual: actual,
  //  last: lastPage
  //}

  const promise = $('body div#default-tab-1 div.Posters a').map((index , element) => new Promise(async(resolve) =>{
    const $element = $(element);
    const id = $element.attr('href').replace(BASE_URL, '').trim();
    const title = $element.find('div.listing-content p').text().trim();
    const poster = $element.find('img').attr('src');
    const extra = await contentHandler(id);
    promises.push({
      id: id || null,
      title: title || null,
      poster: poster || null,
      year: extra.promises[0].year || null,
      genres: extra.promises[0].genres || null,
      rating: extra.promises[0].rating || null,
      synopsis: extra.promises[0].synopsis || null,
      authors: extra.promises[0].authors || null,
      director: extra.promises[0].director || null,
      writers: extra.promises[0].writers || null,
      country: extra.promises[0].country || null,
      releaseDate: extra.promises[0].releaseDate || null,
      promo: extra.promises[0].promo || null
    });
    resolve(promises);
  }));

  return Promise.all(promise.toArray());
};

const episodeContentHanlder = async(id: string) =>{
  const res = await axios.get(`${BASE_URL}${id}`);
  const body = await res.data;
  const $ = load(body);
  const promises = [];

  const previewImage = $('body div.card div.card-body div.row.m-v-30 div.col-sm-3 img.img-fluid').attr('src') || null;
  let synopsis = $('body div div div.page-container div.main-content div.container-fluid div.card div.card-body div.row.m-v-30 div.col-sm-4')
                    .eq(0).find('div.text-large').text().trim();

  
  promises.push({previewImage: previewImage, synopsis: synopsis});

  return Promise.all(promises);
}

const contentHandler = async(id: string) =>{
  const res = await axios.get(`${BASE_URL}${id}`);
  const body = await res.data;
  const $ = load(body);
  const tempPromises = [];
  const promises = [];

  const seasons = $('body div ul.TbVideoNv li.presentation').length;

  $('body div div div.page-container div.main-content div.container-fluid div.card div.card-body div.row.m-v-30 div.col-sm-4').eq(0).each((index , element) =>{
    const $element = $(element);
    const synopsis = $element.find('div.text-large').text().trim();
    const actors = [];
    $element.find('div.sectionDetail.mb15').eq(0).find('a').each((j , el) =>{
      const $el = $(el);
      const name = $el.text();
      actors.push(name)
    });
    const director = $element.find('div.sectionDetail.mb15').eq(1).find('a').text().trim();  
    const writers = [];
    $element.find('div.sectionDetail.mb15').eq(2).find('a').each((j , el) =>{
      const $el = $(el);
      const name = $el.text();
      writers.push(name)
    });
    const country =  $element.find('div.sectionDetail.mb15').eq(3).find('a').text().trim();
    const tempReleaseDate = $element.find('div.sectionDetail.mb15').eq(4).text().trim();
    const releaseDate = tempReleaseDate.substring(tempReleaseDate.lastIndexOf(':') + 1);
    
    tempPromises.push({
      synopsis: synopsis,
      authors: actors,
      director: director,
      writers: writers,
      country: country,
      releaseDate: releaseDate,
    });

  });
  const year = parseInt($('body div div div.page-container div.main-content div.container-fluid div.card div.card-body div.row.m-v-30 div.col-sm-4 div.d-flex.flex-row div.p-v-20').eq(0).find('span').text().trim() , 10);
  const genres = [];
  $('body div div div.page-container div.main-content div.container-fluid div.card div.card-body div.row.m-v-30 div.col-sm-4 div.d-flex.flex-row div.p-v-20').eq(1).find('a').each((j , el) =>{
    const $el = $(el);
    const genre = $el.find('span').text().trim();
    genres.push(genre);
  });
  const rating = parseFloat($('body div div div.page-container div.main-content div.container-fluid div.card div.card-body div.row.m-v-30 div.col-sm-4 div.d-flex.flex-row div.p-v-20').eq(2).find('span').text().trim().split('/')[0]);
  const promo = $('body div.app div.layout div.page-container div.main-content div.modal iframe').attr('src');

  tempPromises.map(doc =>{
    promises.push({
      year: year,
      genres: genres,
      rating: rating,
      synopsis: doc.synopsis,
      authors: doc.authors,
      director: doc.director,
      writers: doc.writers,
      country: doc.country,
      releaseDate: doc.releaseDate,
      promo: promo
    });
  });
  
  return {promises , seasons};
};

export const getSeriesServersBySeason = async(id: string , season: number): Promise<ISerieServerRootObj[]> =>{
  const res = await axios.get(`${BASE_URL}${id}`);
  const body = await res.data;
  const $ = load(body);
  const promises = [];
  
  const serieId = id.split('/')[1];
  const episodesTitles = [];
  const totalEps = $(`body div div.container-fluid div.row div.col-sm-12 div.card div.tab-content div#pills-vertical-${season} a`).length
  $(`body div div.container-fluid div.row div.col-sm-12 div.card div.tab-content div#pills-vertical-${season} a`).each((index, element) => {
    const $element = $(element);
    const title = $element.text().split('-')[1].trim();
    episodesTitles.push(title);
  });
  

  const episodes = await Promise.all(Array.from({length: totalEps} , async(v , j) => {
    sleep(1500);
    const epsTitle = episodesTitles[j];
    const episode = `serie/${serieId}/temporada/${season}/capitulo/${j + 1}` 
    const epsId = `${episode}`;
    sleep(1500);
    const extra = await episodeContentHanlder(epsId);
    const servers = await getSeriesServers(episode);
    
    return{
      episode: j + 1,
      title: epsTitle,
      previewImage: extra[0].episodeContentHanlder,
      synopsis: extra[0].synopsis,
      servers: servers
    }
  }));
  
  promises.push({ season: season, episodes: episodes });
  return Promise.all(promises);
}

export const getMovieServers = async(id: string): Promise<IServers[]> =>{
  const res = await axios.get(`${BASE_URL}${id}`);
  const body = await res.data;
  const $ = load(body);
  const scripts = $('script');
  const servers = [];
  const serverNames = [];

  $('div.app div.layout ul.TbVideoNv li').each((index , element) =>{
    const $element = $(element);
    const name = $element.find('a').text().trim();
    serverNames.push(name);
  })
  
  Array.from({length: scripts.length} , (v , k) =>{
    const $script = $(scripts[k]);
    const contents = $script.html();

    if((contents || '').includes('var video = ')) {
      let allScript = contents.split('video =  ');
      allScript.map(x =>{
        let tempUrlList = urlify(x);
        let urlListFixed = tempUrlList.map(x =>{
          return x.replace(/[;"]/g , '');
        });
        servers.push(urlListFixed);
      });
    }
  });

  const serverList: IServers[] = [];
  Array.from({length: serverNames.length} , (v , k) =>{
    const name = serverNames[k];
    const url = servers[0][k];
    serverList.push({
      name: name,
      url: url
    });
  })

  return Promise.all(serverList);
};

const getSeriesServers = async(id: string): Promise<IServers[]> =>{
  const res = await axios.get(`${BASE_URL}${id}`);
  const body = await res.data;
  const $ = load(body);
  const scripts = $('script');
  const servers = [];
  const serverNames = [];

  $('div.app div.layout ul.TbVideoNv li').each((index , element) =>{
    const $element = $(element);
    const name = $element.find('a').text().trim();
    serverNames.push(name);
  })
  
  Array.from({length: scripts.length} , (v , k) =>{
    const $script = $(scripts[k]);
    const contents = $script.html();

    if((contents || '').includes('var video = ')) {
      let allScript = contents.split('video =  ');
      allScript.map(x =>{
        let tempUrlList = urlify(x);
        let urlListFixed = tempUrlList.map(x =>{
          return x.replace(/[;"]/g , '');
        });
        servers.push(urlListFixed);
      });
    }
  });

  const serverList: IServers[] = [];
  Array.from({length: serverNames.length} , (v , k) =>{
    const name = serverNames[k];
    const url = servers[0][k];
    serverList.push({
      name: name,
      url: url
    });
  })

  return Promise.all(serverList);
};
