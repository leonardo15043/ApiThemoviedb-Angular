import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  idMovie:any;
  movieDetail:any = {}

  constructor(
    private activatedRoute:ActivatedRoute,
    private moviesService:MoviesService,
    private _location: Location
  ) {
      this.activatedRoute.params.subscribe(params => {
        this.idMovie = params['id'];
      })
  }

  ngOnInit() {
    console.log( this.idMovie );
    this.moviesService.getMovie( this.idMovie )
        .subscribe( data => {
          console.log(data);
          this.movieDetail = data
        });

  }

  backClicked() {
   this._location.back();
  }


}
