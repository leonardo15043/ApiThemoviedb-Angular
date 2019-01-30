import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  dataSearch:any[] = [];
  search_movi:any;

  constructor(
    private moviesService:MoviesService,
    private activatedRoute:ActivatedRoute
  ){

    this.activatedRoute.params.subscribe( params =>{
      if(params['text']){
        this.search_movi = params['text'];
        this.search( this.search_movi );
      }
    });

  }

  search( searchValue:string ){

    this.moviesService.getMoviesSearch( searchValue )
        .subscribe( data => {
          console.log(data);
          this.dataSearch = data;
        });
  }



}
