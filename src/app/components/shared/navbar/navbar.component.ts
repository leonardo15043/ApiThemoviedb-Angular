import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../services/movies.service';
// import { SearchComponent } from '../../search/search.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {

  dataSearch:any[] = [];

  constructor(
    private moviesService:MoviesService,
    private router:Router
  ) {}

  search( searchValue:string ){
    this.router.navigate(['search',searchValue]);
  }




}
