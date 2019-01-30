import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesTheaters:any[] = [];
  moviesPopular:any[] = [];
  moviesBoy:any[] = [];

  incremental = 0;

  constructor(
    private moviesService:MoviesService
  ) { }

  ngOnInit() {

      this.moviesService.getMoviesTheaters()
          .subscribe( data => {
            this.moviesTheaters = data
          });

      this.moviesService.getPopularMovies()
          .subscribe( data => {
            console.log(data);
            this.moviesPopular = data
          });

      this.moviesService.getPopularMovies('ninos')
          .subscribe( data => {
            this.moviesBoy = data
          });

  }

}
