import { Injectable } from '@angular/core';
import { Jsonp , Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {

  private apiKey:string = "95245db1f4fb0df929dd6294b038685f";
  private urldb: string = "https://api.themoviedb.org/3";
  private language: string = "es";

  dateMovie: any  = new Date();
  url:string;

 public anyoActual: Date = new Date();

  constructor(
    private jsonp:Jsonp,
    private http:Http
  ) {
    console.log("cargar servicio");


  this.dateMovie = this.anyoActual.getFullYear() + "-" + (this.anyoActual.getMonth() +1 );

  }

  //Detalle de la pelicula
  getMovie( id:any ){

      this.url = `${ this.urldb }/movie/${ id }?api_key=${ this.apiKey }&language=${ this.language }&callback=JSONP_CALLBACK`;
      return this.jsonp.get(  this.url )
                .map( rest => rest.json());

  }

  //Buscar peliculas
  getMoviesSearch( searchValue ){

      this.url = `${ this.urldb }/search/movie?api_key=${ this.apiKey }&query=${ searchValue }&language=${ this.language }&callback=JSONP_CALLBACK`;
      return this.jsonp.get(  this.url )
                .map( rest => rest.json()['results']);

  }

  //Peliculas en cartelera
  getMoviesTheaters(){

      this.url = `${ this.urldb }/discover/movie?api_key=${ this.apiKey }&language=${ this.language }&primary_release_date.gte=${ this.dateMovie }&primary_release_date.lte=${ this.dateMovie }&callback=JSONP_CALLBACK`;
      return this.jsonp.get(  this.url )
                .map( rest => rest.json()['results']);

  }



  //Peliculas mas populares
  getPopularMovies( category = null ){

      if( category == "ninos" ){
          this.url = `${ this.urldb }/discover/movie?api_key=${ this.apiKey }&language=${ this.language }&certification_country=US&certification.lte=G&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
      }else{
          this.url = `${ this.urldb }/discover/movie?api_key=${ this.apiKey }&language=${ this.language }&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
      }


      return this.jsonp.get(  this.url )
                .map( rest => rest.json()['results']);

  }


}
