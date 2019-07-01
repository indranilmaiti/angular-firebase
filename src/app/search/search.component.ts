import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MovieDetail } from '../models/movies'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() inputMovieList: Array<MovieDetail> = [];
  @Output() outputMovieList: EventEmitter<Array<MovieDetail>> = new EventEmitter<Array<MovieDetail>>();

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    // console.log(this.searchText);
    // console.log(this.inputMovieList);
    let filteredMovies = [];
    for (let i = 0; i < this.inputMovieList.length; i++) {
      let movie = this.inputMovieList[i];
      let movieName = movie.movieName.toLowerCase();
      let searchInput = this.searchText.toLowerCase();
      if (movieName.indexOf(searchInput) > -1) {
        filteredMovies.push(movie);
      }
    }
    console.log(filteredMovies);
    this.outputMovieList.emit(filteredMovies);
  }

}
