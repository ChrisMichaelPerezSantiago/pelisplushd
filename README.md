# **:triangular_flag_on_post: PELISPLUSHD** (version 1.0.1)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
          <a href="https://github.com/ChrisMichaelPerezSantiago/pelisplushd/graphs/commit-activity">
            <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
          </a>
          <a href="https://github.com/ChrisMichaelPerezSantiago/pelisplushd/blob/master/LICENSE">
            <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
          </a>
          <img src="https://img.shields.io/badge/now.sh-deployed-brightgreen.svg" alt="">
          <img src="https://badgen.net/badge/icon/now?icon=now&label" alt="">
          <img src="https://img.shields.io/badge/Pelisplushd-API-brightgreen.svg" alt="">
          [![Build Status](https://travis-ci.com/ChrisMichaelPerezSantiago/pelisplushd.svg?branch=master)](https://travis-ci.com/ChrisMichaelPerezSantiago/pelisplushd)
          <img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/pelisplushd?style=social" alt="">
          
         


 <a href="https://nodei.co/npm/pelisplushd/"><img src="https://nodei.co/npm/pelisplushd.png"></a>


>Custom API of the pelisplushd website. The entire catalog is in Spanish; either the data and the servers. You can get all the data related to series and movies and their own servers for free.

---

<img src="./assests/img/pelisplushd.png" width="100%" alt="">


## 🚀 Custom Pelisplushd API URL
- [x] [pelisplushd](https://pelisplushd.chrismichael.now.sh/v1/)

## 📚 **Development Diary**
Describe the purpose of the project and give clues about what the code does. 
For more information go to the following link [Diary Reference](./development_diary/README.md).



## **:wrench: Developer usage**

### **Set up project**

Before cloning the repo **be sure** you have installed:

- [**NODE**](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [**NPM**](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone https://github.com/ChrisMichaelPerezSantiago/pelisplushd.git`

---

### **Installation**

In order to install the project and all dependencies, enter in the project folder and run `npm install`

---

### Start the project

```bash
npm run start:dev
```
or
```bash
npm run start
```

### In case of debugging the API functions
```bash
npm run start:api
```

### Test the project

```bash
npm test
```

---


# API Documentation


## getAllMovies([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221154114
// http://localhost:3000/v1/GetAllMovies/1

{
  "movies": [
    {
      "id": "pelicula/isi-amp-ossi",
      "title": "Isi & Ossi (2020)",
      "poster": "https://image.tmdb.org/t/p/w154/ntUQ5wz2vQWjSU31BjBTmouZc3L.jpg",
      "year": 2020,
      "genres": [
        "Comedia",
        ", Romance"
      ],
      "rating": 7.1,
      "synopsis": "Isi y Ossi no podrían ser más diferentes. Ella es la hija de un multimillonario y él es un boxeador en bancarrota. Pero cuando ambos se conocen pronto se darán cuenta de que pueden aprovechar su alianza, ella provocando a sus padres por salir con un boxeador y él para hacer que le financien su primer combate de boxeo profesional. Sus planes pronto se convertirán en un caos emocional que desafiará todo lo que creían saber sobre el amor y el dinero.",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "N/A",
      "releaseDate": "14 Feb 2020",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "pelicula/cafarnaum",
      "title": "Cafarnaúm (2018)",
      "poster": "https://image.tmdb.org/t/p/w154/lpcU0FTLntTcCW8ez1aggMfx4Be.jpg",
      "year": 2018,
      "genres": [
        "Drama"
      ],
      "rating": 8.3,
      "synopsis": "Beirut, Líbano. Zain es un niño de doce años inteligente y valiente, que sobrevive a los peligros de las calles de la ciudad gracias a su ingenio. Huyendo de sus padres, y haciendo valer sus derechos, recurre a la justicia para demandarles por el 'crimen' de haberle dado la vida. Una fábula contemporánea de carácter político sobre un niño que se rebela contra la vida que le han impuesto vivir .",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "Lebanon",
      "releaseDate": "20 Sep 2018",
      "promo": "https://www.youtube.com/embed/mZ-f8Y8TZiI"
    },
    // .....
  ]
}
```


## getLatestReleasesMovies([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221154240
// http://localhost:3000/v1/GetLatestMovies/1

{
  "movies": [
    {
      "id": "pelicula/horse-girl",
      "title": "Horse Girl (2020)",
      "poster": "https://image.tmdb.org/t/p/w154/RjiEuu8bJjnOmrNDqSjrSFSe4N.jpg",
      "year": 2020,
      "genres": [
        "Ciencia Ficción",
        ", Comedia",
        ", Drama",
        ", Misterio"
      ],
      "rating": 5.5,
      "synopsis": "Sarah (Alison Brie) es una joven peculiar con debilidad por los caballos, aficionada a las manualidades y a las series policiacas sobrenaturales, cuyos sueños lúcidos irrumpen cada vez más en su vida cotidiana.",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "USA",
      "releaseDate": "27 Jan 2020",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "pelicula/a-todos-los-chicos-2-pd-todavia-te-quiero",
      "title": "A todos los chicos 2: P.D. Todavía te quiero (2020)",
      "poster": "https://image.tmdb.org/t/p/w154/eoCZ84UK0E3X7ru4VAE2ept88zl.jpg",
      "year": 2020,
      "genres": [
        "Comedia",
        ", Romance"
      ],
      "rating": 7.1,
      "synopsis": "Es un nuevo año y Lara Jean (Lana Condor) y Peter (Noah Centineo) ya no fingen ser pareja: son una pareja. Y, mientras ella prueba montón de cosas por primera vez junto a él - su primer beso de verdad, su primera cita real, su primer San Valentín - encuentra más apoyo en Kitty y Margot (Anna Cathcart y Janel Parrish), Chris (Madeleine Arthur) y una nueva e inesperada confidente, Stormy (Holland Taylor). Pero cuando John Ambrose (Jordan Fisher), otro destinatario de una de las viejas cartas de amor de Lara Jean, vuelve a entrar en su vida, debe confiar en sí misma más que nunca, ya que se enfrenta a su primer dilema verdadedro ¿puede una chica estar enamorada de dos chicos a la vez?",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "USA",
      "releaseDate": "12 Feb 2020",
      "promo": "https://www.youtube.com/embed/"
    },
    // .....
  ]
}
```


## getPopularMoviesList([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221154332
// http://localhost:3000/v1/GetPopularMovies/1

{
  "movies": [
    {
      "id": "pelicula/jefe-en-panales",
      "title": "Jefe en pañales (2017)",
      "poster": "https://image.tmdb.org/t/p/w154/frf7zxnpK5KiFrh5feAaA36GvQf.jpg",
      "year": 2017,
      "genres": [
        "Animación",
        ", Comedia"
      ],
      "rating": 6.3,
      "synopsis": "La llegada de un hermanito trastoca por completo la idílica vida del pequeño Tim, hasta entonces hijo único de 7 años y el ojito derecho de sus padres. Su nuevo hermano es un peculiar bebé, que viste traje y corbata y lleva maletín. Tim comienza a sospechar de él, hasta que descubre que puede hablar.",
      "authors": [
        "Alec Baldwin",
        "Steve Buscemi",
        "Miles Bakshi",
        "Jimmy Kimmel",
        "Lisa Kudrow",
        "Tobey Maguire",
        "Conrad Vernon",
        "James McGrath",
        "David Soren",
        "Nina Zoe Bakshi",
        "Tom McGrath",
        "Walt Dohrn",
        "James Ryan"
      ],
      "director": "Tom McGrath",
      "writers": [
        "Michael McCullers",
        "Marla Frazee "
      ],
      "country": "USA",
      "releaseDate": "31 Mar 2017",
      "promo": "https://www.youtube.com/embed/QY5A2uwV160"
    },
    {
      "id": "pelicula/san-andres",
      "title": "San Andrés (2015)",
      "poster": "https://image.tmdb.org/t/p/w154/621lYttaH5iPmhsm6nlxz8RvTBu.jpg",
      "year": 2015,
      "genres": [
        "Acción",
        ", Drama",
        ", Suspense"
      ],
      "rating": 6.1,
      "synopsis": "La falla de San Andrés acaba cediendo ante las temibles fuerzas telúricas y desencadena un terremoto de magnitud 9 en California. Ante tal catástrofe, el piloto de helicóptero de búsqueda y rescate Ray (Dwayne Johnson) y su ex esposa Emma (Carla Gugino) viajan juntos desde Los Ángeles hasta San Francisco para salvar a su única hija, Blake (Alexandra Daddario). Pero su tortuoso viaje hacia el norte solamente es el comienzo del desomoronamiento de todo lo que creían firme en su vida.",
      "authors": [
        "Dwayne Johnson",
        "Alexandra Daddario",
        "Carla Gugino",
        "Ioan Gruffudd",
        "Archie Panjabi",
        "Paul Giamatti",
        "Hugo Johnstone-Burt",
        "Art Parkinson",
        "Colton Haynes",
        "Kylie Minogue",
        "Will Yun Lee",
        "Morgan Griffin",
        "Breanne Hill"
      ],
      "director": "Brad Peyton",
      "writers": [
        "Carlton Cuse",
        "Andre Fabrizio",
        "Jeremy Passmore",
        "Carlton Cuse",
        "Andre Fabrizio"
      ],
      "country": "USA",
      "releaseDate": "29 May 2015",
      "promo": "https://www.youtube.com/embed/NZNHs7gyANA"
    },
    // .....
  ]
}
```





## getMovieByGenresList([genre], [page])

<table>
<tr><th>Genres</th><th>Page</th></tr>
<tr><td>

|   genres            |    
|---------------------|
|accion               |      
|animacion            |   
|aventura             | 
|ciencia-ficcion      | 
|comedia              |
|crimen               |  
|documental           |  
|drama                |  
|fantasia             |   
|foreign              |
|guerra               |  
|historia             |
|pelicula-de-la-television|
|romance              |
|suspense             |
|terror               |
|western              |
|misterio             |

</td><td>


| pages  |
|--------|
| [1 .. total page unknown]|
</table>

```json
// 20200221154438
// http://localhost:3000/v1/MoviesByGenre/accion/1

{
  "genres": [
    {
      "id": "pelicula/midway-batalla-en-el-pacifico",
      "title": "Midway: Batalla en el Pacifico (2019)",
      "poster": "https://image.tmdb.org/t/p/w154/cwjJOG2LLj19pPgTOFcegUP1OtD.jpg",
      "year": 2019,
      "genres": [
        "Acción",
        ", Drama",
        ", Historia"
      ],
      "rating": 6.8,
      "synopsis": "1942, Segunda Guerra Mundial. Después del devastador ataque sorpresa que destruyó Pearl Harbor, la Armada Imperial Japonesa se prepara para un nuevo ataque. Pero el Almirante Nimitz y Dick Best, el mejor piloto de la armada estadounidense, preparan un contraataque al imponente ejército japonés. Dick encabezará un ataque masivo que hará que Japón se dé cuenta de su error. Una decisión que cambió el curso de la historia para siempre. Mientras estos dos titánicos enemigos emprenden una letal batalla para cambiar el rumbo de la guerra, todas las miradas se vuelcan hacia la remota isla de Midway, donde una serie de impactantes ataques aéreos y marítimos pondrán a prueba la potencia y la fortaleza de ambas naciones.",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "USA Hong Kong",
      "releaseDate": "08 Nov 2019",
      "promo": "https://www.youtube.com/embed/pRtWU8sUxQo"
    },
    {
      "id": "pelicula/dragon-quest-your-story",
      "title": "Dragon Quest: Your Story (2019)",
      "poster": "https://image.tmdb.org/t/p/w154/ygggrrFNW7p1Wd2Fg5BTq4505VE.jpg",
      "year": 2019,
      "genres": [
        "Acción",
        ", Animación",
        ", Aventura",
        ",  Comedia",
        ", Fantasía"
      ],
      "rating": 7.5,
      "synopsis": "Lucas sigue los pasos de su padre para rescatar a su madre del malvado Ladja. Su única esperanza es dar con el héroe celestial que esgrime la espada de Zenithia.",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "Japan",
      "releaseDate": "02 Aug 2019",
      "promo": "https://www.youtube.com/embed/FV0TktYCV6s"
    },
    // .....
  ]
}
```

## 📣Read this please | To get the movies videos servers!📣
## getMovieServers([id])
To get the servers of each movie you can verify the `id` property. For this you can verify the following functions related to the movies that return the id:
- [x] getAllMovies
- [x] getLatestReleasesMovies
- [x] getPopularMovies
- [x] moviesByGenres

The functions that are in the list are those that provide the `id` property, which are compatible to obtain the servers of the movies
using the `getMovieServers` function.

```typescript
const id = 'pelicula/frozen-ii';
getMovieServers(id)
  .then(servers =>{
    console.log(servers)
  })
```

```json
// 20200221160326
// http://localhost:3000/v1/GetMovieServers/pelicula/frozen-ii

{
  "servers": [
    {
      "name": "PlusTo",
      "url": "https://www.pelisplus.net/v/y0q07bez02ewy5w"
    },
    {
      "name": "Mystream",
      "url": "https://embed.mystream.to/ojs7b7yw7cem"
    },
    {
      "name": "MDrop",
      "url": "https://mixdrop.co/e/qkbditm9t7r"
    },
    {
      "name": "Uqload",
      "url": "https://uqload.com/embed-8t12hqr90lni.html"
    },
    {
      "name": "Mobile",
      "url": "https://fastplay.to/embed-6ua5esheldvq.html"
    },
    {
      "name": "VidLox",
      "url": "https://vidlox.me/embed-kegv8t2l8ge3.html"
    }
  ]
}
```

## getAllSeries([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221162812
// http://localhost:3000/v1/GetAllSeries/1

{
  "series": [
    {
      "id": "serie/la-cosa-del-pantano",
      "title": "La cosa del pantano (2019)",
      "poster": "https://image.tmdb.org/t/p/w154/dD3HcMczLC9wNvfNzx4pZVyl6q8.jpg",
      "year": 2019,
      "seasons": 1,
      "genres": [
        "Drama",
        ", Misterio"
      ],
      "rating": 7.7,
      "synopsis": "Cuando la investigadora del CDC, Abby Arcane, regresa a su hogar de la infancia en Houma, Louisiana, para investigar un virus mortal transmitido por el pantano, ella desarrolla un vínculo sorprendente con el científico Alec Holland, solo para que se lo arrebaten trágicamente. Pero a medida que las poderosas fuerzas descienden sobre Houma, con la intención de explotar las misteriosas propiedades del pantano para sus propios fines, Abby descubrirá que el pantano contiene secretos místicos, tanto horripilantes como maravillosos, y que el amor potencial de su vida puede no estar muerto después de todo.",
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "USA",
      "releaseDate": "31 May 2019",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "serie/el-ejercito-olvidado",
      "title": "El Ejercito Olvidado (2020)",
      "poster": "https://image.tmdb.org/t/p/w154/iEKRHJB9lb4qT56h6Pf6aulLmXr.jpg",
      "year": 2020,
      "seasons": 1,
      "genres": [
        
      ],
      "rating": 7.2,
      "synopsis": null,
      "authors": [
        ""
      ],
      "director": null,
      "writers": [
        ""
      ],
      "country": "India",
      "releaseDate": "24 Jan 2020",
      "promo": "https://www.youtube.com/embed/"
    },
    // .....
  ]
}
```

## getLatestReleasesSeries([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221162924
// http://localhost:3000/v1/GetLatestSeries/1

{
  "series": [
    {
      "id": "serie/fear-the-walking-dead",
      "title": "Fear the Walking Dead (2015)",
      "poster": "https://image.tmdb.org/t/p/w154/346HNO67s1rUM9yl3rWlhw0HrZ4.jpg",
      "year": 2015,
      "seasons": 5,
      "genres": [
        "Drama",
        ", Terror"
      ],
      "rating": 7,
      "synopsis": "'Fear The Walking Dead', el esperado spin-off de 'The Walking Dead', es una serie dramática que explora el inicio del apocalipsis desde el punto de vista de una familia desestructurada: Sean Cabrera, profesor divorciado consejero de orientación femenina, y sus dos hijos. De la ciudad nace un brote de algo misterioso que amenaza la estabilidad de Madison Clark y Travis Manawa. La presión de sacar adelante dos familias queda en un segundo plano cuando la sociedad comienza a desmoronarse. Deberán adaptarse y sobrevivir a la vez que aceptan las historias más oscuras.",
      "authors": [
        "Kim Dickens",
        "Frank Dillane",
        "Alycia Debnam-Carey",
        "Colman Domingo",
        "Rubén Blades",
        "Danay García",
        "Cliff Curtis",
        "Lorenzo James Henrie",
        "Daniel Sharman",
        "Mercedes Mason",
        "Garret Dillahunt",
        "Lennie James",
        "Maggie Grace"
      ],
      "director": "N/A",
      "writers": [
        "Dave Erickson",
        "Robert Kirkman"
      ],
      "country": "USA",
      "releaseDate": "23 Aug 2015",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "serie/the-walking-dead",
      "title": "The Walking Dead (2010)",
      "poster": "https://image.tmdb.org/t/p/w154/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg",
      "year": 2010,
      "seasons": 10,
      "genres": [
        "Drama"
      ],
      "rating": 8.4,
      "synopsis": "\"The Walking Dead\" está ambientada en un futuro apocalíptico con la Tierra devastada por el efecto de un cataclismo, que ha provocado la mutación en zombies de la mayor parte de los habitantes del planeta. La serie, explora las dificultades de los protagonistas para sobrevivir en un mundo poblado por el horror, así como las relaciones personales que se establecen entre ellos, en ocasiones también una amenaza para su supervivencia.",
      "authors": [
        "Andrew Lincoln",
        "Norman Reedus",
        "Lauren Cohan",
        "Danai Gurira",
        "Melissa McBride",
        "Alanna Masterson",
        "Josh McDermitt",
        "Christian Serratos",
        "Seth Gilliam",
        "Ross Marquand",
        "Katelyn Nacon",
        "Tom Payne",
        "Khary Payton"
      ],
      "director": "N/A",
      "writers": [
        "Frank Darabont",
        "Angela Kang"
      ],
      "country": "USA",
      "releaseDate": "31 Oct 2010",
      "promo": "https://www.youtube.com/embed/"
    }
  ]
}
```

## getPopularSeries([page])
*It will show N data per page , Total page unknown.*

```json
// 20200221163036
// http://localhost:3000/v1/GetPopularSeries/1

{
  "series": [
    {
      "id": "serie/stranger-things",
      "title": "Stranger Things (2016)",
      "poster": "https://image.tmdb.org/t/p/w154/esKFbCWAGyUUNshT5HE5BIpvbcL.jpg",
      "year": 2016,
      "seasons": 3,
      "genres": [
        "Drama"
      ],
      "rating": 8.9,
      "synopsis": "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
      "authors": [
        "Winona Ryder",
        "David Harbour",
        "Finn Wolfhard",
        "Millie Bobby Brown",
        "Gaten Matarazzo",
        "Caleb McLaughlin",
        "Natalia Dyer",
        "Charlie Heaton",
        "Joe Keery",
        "Noah Schnapp",
        "Sadie Sink",
        "Dacre Montgomery",
        "Cara Buono"
      ],
      "director": "N/A",
      "writers": [
        "Matt Duffer",
        "Ross Duffer"
      ],
      "country": "USA",
      "releaseDate": "15 Jul 2016",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "serie/teen-wolf",
      "title": "Teen Wolf (2011)",
      "poster": "https://image.tmdb.org/t/p/w154/wvU3ki9Qp7amrgX4PIYeo4YiX2O.jpg",
      "year": 2011,
      "seasons": 6,
      "genres": [
        "Drama",
        ", Misterio"
      ],
      "rating": 7.7,
      "synopsis": "Teen Wolf es una serie de televisión estadounidense escrita por Jeff Davis para MTV. Está basada en la película de 1985 del mismo nombre. Es una drama sobrenatural que sigue a Scott McCall, un estudiante cuya vida cambia totalmente al ser mordido por un hombre lobo.",
      "authors": [
        "Tyler Posey",
        "Dylan O'Brien",
        "Holland Roden",
        "Shelley Hennig",
        "Ian Bohen",
        "Dylan Sprayberry",
        "Linden Ashby",
        "Victoria Moroles",
        "Ryan Kelley",
        "Cody Christian",
        "Michael Johnston"
      ],
      "director": "N/A",
      "writers": [
        "Jeff Davis"
      ],
      "country": "USA",
      "releaseDate": "05 Jun 2011",
      "promo": "https://www.youtube.com/embed/"
    },
    // .....
  ]
}
```

## seriesByGenres([genre], [page])
<table>
<tr><th>Genres</th><th>Page</th></tr>
<tr><td>

|   genres            |    
|---------------------|
|accion               |      
|animacion            |   
|aventura             | 
|ciencia-ficcion      | 
|comedia              |
|crimen               |  
|documental           |  
|drama                |  
|fantasia             |   
|foreign              |
|guerra               |  
|historia             |
|pelicula-de-la-television|
|romance              |
|suspense             |
|terror               |
|western              |
|misterio             |

</td><td>


| pages  |
|--------|
| [1 .. total page unknown]|
</table>

```json
// 20200221163337
// http://localhost:3000/v1/SeriesByGenre/accion/1

{
  "genres": [
    {
      "id": "serie/blindspot",
      "title": "Blindspot (2015)",
      "poster": "https://image.tmdb.org/t/p/w154/fx3SId5m3j77BOM4YJ0veJwsraq.jpg",
      "year": 2015,
      "seasons": 3,
      "genres": [
        "Acción",
        ", Crimen",
        ", Drama"
      ],
      "rating": 7.5,
      "synopsis": "Blindspot parte de una atractiva mujer, sin recuerdos de su pasado, que aparece desnuda en Times Square cubriendo su cuerpo solamente de tatuajes intrincados. Su descubrimiento pone en marcha un gran y complejo misterio que llama inmediatamente la atención del FBI, que comienzan a seguir la hoja de ruta en su cuerpo para revelar una conspiración más amplia de delito y, de esa manera, descubrir la verdad sobre su identidad.",
      "authors": [
        "Sullivan Stapleton",
        "Jaimie Alexander",
        "Rob Brown",
        "Audrey Esparza",
        "Ashley Johnson",
        "Ennis Esmer"
      ],
      "director": "N/A",
      "writers": [
        "Martin Gero"
      ],
      "country": "USA",
      "releaseDate": "21 Sep 2015",
      "promo": "https://www.youtube.com/embed/"
    },
    {
      "id": "serie/video-game-high-school",
      "title": "Video Game High School (2012)",
      "poster": "https://image.tmdb.org/t/p/w154/oLFEBisj1rmKEQNNbkJBArAFp7.jpg",
      "year": 2012,
      "seasons": 3,
      "genres": [
        "Acción",
        ", Ciencia Ficción",
        ", Romance"
      ],
      "rating": 7.7,
      "synopsis": "En un mundo futurista donde el juego es el deporte más importante, un adolescente asiste a una escuela que se especializa en un plan de estudios de videojuegos en cada género.",
      "authors": [
        "Josh Blaylock",
        "Brian Firenzi",
        "Johanna Braddy",
        "Ellary Porterfield",
        "Joey Scoma",
        "Joel Kelley Dauten",
        "Hallie Ricardo",
        "Anthony Gioe",
        "Chase Williamson",
        "Brennan Murray",
        "Harley Morenstein",
        "Benji Dolly",
        "Riley Rose Critchlow"
      ],
      "director": "N/A",
      "writers": [
        "N/A"
      ],
      "country": "USA",
      "releaseDate": null,
      "promo": "https://www.youtube.com/embed/"
    },
    // .....
  ]
}
```

## 📣Read this please | To get the series videos servers by season!📣
## getSeriesServersBySeason([id] , [season])
To get the servers of each serie you can verify the `id` property. For this you can verify the following functions related to the series that return the `id`:
- [x] getAllSeries
- [x] getLatestReleasesSeries
- [x] getPopularSeries
- [x] seriesByGenres

The functions that are in the list are those that provide the `id` property, which are compatible to obtain the servers of the series
using the `getSeriesServersBySeason` function.

The second parameter is the season you want to get the servers to. To find out how many seasons each series has, you can check the `seasons` property.

For example, the Game of Thrones series has 8 season. Now I would use the `id` of the serie and the season you want.

```typescript
const id = 'serie/game-of-thrones/';
const season = 8;

getSeriesServersBySeason([id] , [season]) 
  .then(servers =>{
    console.log(servers)
  });
```

```json
/ 20200221164422
// http://localhost:3000/v1/GetAllServersBySeason/serie/game-of-thrones/8

{
  "servers": [
    {
      "season": 8,
      "episodes": [
        {
          "episode": 1,
          "title": "Episodio 1",
          "synopsis": "Los últimos sobrevivientes se preparan para enfrentar a los caminantes blancos. Mientras tanto, continúan los planes en simultáneo para gobernar los Siete Reinos.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/d-r-7ixw-740n0j"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-d8s9bx7go8ju.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/068tn37kj9mb"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-3b153e4fjw9f.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-ifovg9sd8bjd.html"
            }
          ]
        },
        {
          "episode": 2,
          "title": "La reina legítima",
          "synopsis": "Jon Snow tiene que afrontar las consecuencias del descubrimiento de su origen, a la vez que los altos mandos de Invernalia tienen que resolver qué hacen con el recién llegado Jaime Lannister. Mientras la tensión entre algunos personajes se acrecenta en la fortaleza, los Caminantes Blancos y su ejército de Espectros consiguen atisbar la silueta de Invernalia, anticipando la denominada como Gran Guerra entre vivos y no muertos.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/2e3egc2qw3e5p3m"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-uieyxa51lzlz.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/q0hy70u63i14"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-jcv4rejpca2y.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-8pq41sau0a9l.html"
            }
          ]
        },
        {
          "episode": 3,
          "title": "Conflicto Bélico",
          "synopsis": "Tras años ampliando la cuantía de sus huestes, el Rey de la Noche irrumpe en los alrededores de Invernalia para dar el pistoletazo de salida a la Gran Guerra. Este conflicto bélico de épicas proporciones decantará la balanza del lado de la vida o de la muerte, ante la expectante mirada de Cersei Lannister, que espera agazapada en Desembarco del Rey a conocer el resultado de la batalla para atacar al diezmado vencedor.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/pkekqcm4p8wj4nq"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-mu2cpy4thte4.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/g131amle6gw9"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-u6wu0esgkdhw.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-bgwhvs4odkv7.html"
            }
          ]
        },
        {
          "episode": 4,
          "title": "Éxodo",
          "synopsis": "",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/88r8ga8wd2xqlyn"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/vuodt3wjg8ku"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-5vcyaxgj8eic.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-so4j267ymelq.html"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-7uahm4c886le.html"
            }
          ]
        },
        {
          "episode": 5,
          "title": "Episodio 5",
          "synopsis": "",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/pkekqcm0lggdyrg"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-74pd55l83k6h.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/eq82m79nb8ms"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-yqjc2lbi8qb3.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-9j7bjuhz1z7k.html"
            }
          ]
        },
        {
          "episode": 6,
          "title": "El Trono de Hierro",
          "synopsis": "Tras el devastador ataque a Desembarco del Rey, Daenerys debe enfrentarse a los supervivientes.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/4868gazj43r3k2k"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-kxf4z6f226eg.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/vcv7gby8fg6i"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-etd3u0co3yej.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-u63g39xvv8ii.html"
            }
          ]
        }
      ]
    }
  ]
}
```

As the series has 8 season you can decide which season you want to get

Here another example

```typescript
const id = 'serie/game-of-thrones/';
const season = 7;

getSeriesServersBySeason([id] , [season]) 
  .then(servers =>{
    console.log(servers)
  });
```

```json
// 20200221165318
// http://localhost:3000/v1/GetAllServersBySeason/serie/game-of-thrones/7

{
  "servers": [
    {
      "season": 7,
      "episodes": [
        {
          "episode": 1,
          "title": "Rocadragón",
          "synopsis": "Jon Snow organiza la defensa del Norte. Cersei intenta equilibrar la balanza. Samwell descubre información crucial. Daenerys vuelve a casa.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/kdldqc38qlklnmw"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-5jptrdkgj9i4.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/4bu5w3h95jc0"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-mlfnsj8pkaus.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-mredf8m4h5ee.html"
            }
          ]
        },
        {
          "episode": 2,
          "title": "Bajo la tormenta",
          "synopsis": "Daenerys recibe una visita inesperada. Jon se enfrenta a una rebelión. Sam arriesga su carrera y su vida. Tyrion planea la conquista de Poniente.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/78081ag5pjlkxll"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-049lry697lzj.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/dz80dx8pdycv"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-z8xcr6ykte3x.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-7ky769rwp3k2.html"
            }
          ]
        },
        {
          "episode": 3,
          "title": "La justicia de la reina",
          "synopsis": "Daenerys recibe a Jon Snow, pero ella se niega a reconocer la independencia del Norte y él no acepta inclinarse ante ella. Cersei se deleita vengándose de Ellaria y Jamie conquista el castillo de los Tyrell, pero Olenna le depara una última sorpresa.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/rmlm1bepk83x1re"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/k7rnp6rov1ac"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-7qk4m4emro3h.html"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-3kc9ryp484wl.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-zejbmv5anrld.html"
            }
          ]
        },
        {
          "episode": 4,
          "title": "Botines de guerra",
          "synopsis": "Acompañados de los Tarly y lo que queda del ejército Lannister, Jaime y Bronn escoltan lo saqueado en Altojardín rumbo a Desembarco del Rey. En Rocadragón, Jon sigue intentando disuadir a Daenerys, quien recibe malas noticias. Invernalia recibe una visita inesperada.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/q2l2wcewlqgmgn3"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-l0czwt3tg8n7.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/azo8j41ybt4l"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-j8mruof69gky.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-h35hsx0ic3ao.html"
            }
          ]
        },
        {
          "episode": 5,
          "title": "Guardaoriente",
          "synopsis": "Tras la batalla, Cersei jura destruir a todo aquel que se ponga en su camino, mientras Daenerys demanda lealtad a los soldados Lannister que han sobrevivido: pueden unirse a ella o morir. De vuelta en Invernalia, Jon presta atención a una nueva visión de Bran.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/-erelcp2dx16052"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/vep1l5fi9sws"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-j07siegusdri.html"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-8uwwjfwzlsq4.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-gjysssnw7ovb.html"
            }
          ]
        },
        {
          "episode": 6,
          "title": "Más allá del Muro",
          "synopsis": "Al otro lado del Muro, en compañía de Beric, Thoros, Tormund, Gendry, el Perro y Jorah Mormont, Jon se abre paso a través del frío hacia un destino impredecible. En Invernalia, Arya desconfía de las intenciones de Sansa tras encontrar el pergamino. Daenerys sopesa sus decisiones junto a Tyrion en Rocadragón.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/xdqd6c53gl8ywx0"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-7gc4e85trw0r.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/r2n5kzpays1d"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-vgg885iur5mn.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-14xpcbn6m79e.html"
            }
          ]
        },
        {
          "episode": 7,
          "title": "El dragón y el lobo",
          "synopsis": "Jon Snow prepara las defensas en el norte. Cersei busca mejorar sus oportunidades. Samwell descubre información importante.",
          "servers": [
            {
              "name": "PlusTo",
              "url": "https://www.pelisplus.net/v/08k8gal0yeykq07"
            },
            {
              "name": "Uqload",
              "url": "https://uqload.com/embed-bh2wwvlrlmxb.html"
            },
            {
              "name": "Mystream",
              "url": "https://embed.mystream.to/xw5g11nv972q"
            },
            {
              "name": "Mobile",
              "url": "https://fastplay.to/embed-fpc49ifkie10.html"
            },
            {
              "name": "VidLox",
              "url": "https://vidlox.me/embed-rnna4f0z9i2k.html"
            }
          ]
        }
      ]
    }
  ]
}
```

## search([query])
*Useful function to search movies and series.*

```json
// 20200222114331
// http://localhost:3000/v1/Search/Fantastic%20Beasts

{
  "search": [
    {
      "id": "pelicula/animales-fantasticos-los-crimenes-de-grindelwald",
      "title": "Animales fantásticos: Los crímenes de Grindelwald (2018)",
      "poster": "https://image.tmdb.org/t/p/w154/zs6LFuE4aB1I8crKjAhlPVTHAOS.jpg",
      "year": 2018,
      "seasons": null,
      "genres": [
        "Aventura",
        ", Fantasía"
      ],
      "rating": 7.9,
      "synopsis": "Cumpliendo con su amenaza, Grindelwald escapa de su custodia y ha comenzado a reunir seguidores, la mayoría de los cuales no sospechan sus verdaderas intenciones: alzar a los magos purasangre para reinar sobre todas las criaturas no mágicas. En un esfuerzo por frustrar los planes de Grindelwald, Albus Dumbledore (Jude Law) recluta a su antiguo estudiante Newt Scamander, quien accede a prestar su ayuda, sin conocer los peligros que aguardan. Las líneas quedan marcadas mientras el amor y la lealtad son puestos a prueba, incluso entre los amigos más cercanos y la familia, en un mundo mágico cada vez más dividido.",
      "authors": [
        "Eddie Redmayne",
        "Katherine Waterston",
        "Alison Sudol",
        "Dan Fogler",
        "Jude Law",
        "Ezra Miller",
        "Johnny Depp",
        "Zoë Kravitz",
        "Callum Turner",
        "Claudia Kim",
        "Carmen Ejogo",
        "Jessica Williams",
        "William Nadylam"
      ],
      "director": "David Yates",
      "writers": [
        "J.K. Rowling",
        "J.K. Rowling "
      ],
      "country": "UK USA",
      "releaseDate": "16 Nov 2018",
      "promo": "https://www.youtube.com/embed/fcE3g0DZsd8"
    },
    {
      "id": "pelicula/animales-fantasticos-y-donde-encontrarlos",
      "title": "Animales fantásticos y dónde encontrarlos (2016)",
      "poster": "https://image.tmdb.org/t/p/w154/l0cRLV8UTthZcfSzmch3z5cepw1.jpg",
      "year": 2016,
      "seasons": null,
      "genres": [
        "Aventura",
        ", Fantasía"
      ],
      "rating": 7.3,
      "synopsis": "Año 1926. Newt Scamander acaba de completar un viaje por todo el mundo para encontrar y documentar una extraordinaria selección de criaturas mágicas. Llegando a Nueva York para hacer una breve parada en su camino, donde podría haber llegado y salido sin incidentes…pero no para un Muggle llamado Jacob, un caso perdido de magia, y la fuga de algunas criaturas fantásticas de Newt, que podrían causar problemas el mundo mágico y en el mundo Muggle.",
      "authors": [
        "Eddie Redmayne",
        "Colin Farrell",
        "Katherine Waterston",
        "Dan Fogler",
        "Alison Sudol",
        "Jon Voight",
        "Ron Perlman",
        "Johnny Depp",
        "Zoë Kravitz",
        "Ezra Miller",
        "Samantha Morton",
        "Carmen Ejogo",
        "Josh Cowdery"
      ],
      "director": "David Yates",
      "writers": [
        "J.K. Rowling"
      ],
      "country": "UK USA",
      "releaseDate": "18 Nov 2016",
      "promo": "https://www.youtube.com/embed/US2LnWrrCq4"
    }
  ]
}
```

```json
// 20200222114657
// http://localhost:3000/v1/Search/Game%20of%20throne

{
  "search": [
    {
      "id": "serie/game-of-thrones",
      "title": "Game of Thrones (2011)",
      "poster": "https://image.tmdb.org/t/p/w154/iZ384PgGhuqMM0iBJFPjkGADKhj.jpg",
      "year": 2011,
      "seasons": 8,
      "genres": [
        "Drama"
      ],
      "rating": 9.5,
      "synopsis": "Juego de Tronos es una serie de televisión de drama y fantasía creada para la HBO por David Benioff y D. B. Weiss. Es una adaptación de la saga de novelas de fantasía Canción de Hielo y Fuego de George R. R. Martin. La primera de las novelas es la que da nombre a la serie.\nLa serie, ambientada en los continentes ficticios de Westeros y Essos al final de un verano de una decada de duración, entrelaza varias líneas argumentales. La primera sigue a los miembros de varias casas nobles inmersos en una guerra civil por conseguir el Trono de Hierro de los Siete Reinos. La segunda trata sobre la creciente amenaza de un inminente invierno y sobre las temibles criaturas del norte. La tercera relata los esfuerzos por reclamar el trono de los últimos miembros exiliados de una dinastía destronada. A pesar de sus personajes moralmente ambiguos, la serie profundiza en los problemas de la jerarquía social, religión, lealtad, corrupción, sexo, guerra civil, crimen y castigo.",
      "authors": [
        "Emilia Clarke",
        "Kit Harington",
        "Peter Dinklage",
        "Lena Headey",
        "Nikolaj Coster-Waldau",
        "Sophie Turner",
        "Maisie Williams",
        "Iain Glen",
        "Liam Cunningham",
        "John Bradley",
        "Conleth Hill",
        "Gwendoline Christie",
        "Isaac Hempstead-Wright"
      ],
      "director": "N/A",
      "writers": [
        "David Benioff",
        "D.B. Weiss"
      ],
      "country": "USA UK",
      "releaseDate": "17 Apr 2011",
      "promo": "https://www.youtube.com/embed/"
    }
  ]
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---



### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [Chris Michael](http://personal-porfolio.chrismichael.now.sh).
