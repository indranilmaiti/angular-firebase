import { Component, OnInit } from '@angular/core';
import { MovieDetail } from '../../models/movies'
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-admin-movies',
  templateUrl: './admin-movies.component.html',
  styleUrls: ['./admin-movies.component.css']
})
export class AdminMoviesComponent implements OnInit {

  movieName: string;
  movielanguage: string;
  youtubeTrailer: string;
  rating: string;
  description: string;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
  }

  createMovies() {
    let movieObj = new MovieDetail();
    movieObj.movieName = this.movieName;
    movieObj.language = this.movielanguage;
    movieObj.description = this.description;
    movieObj.rating = this.rating;
    movieObj.trailer = this.youtubeTrailer;
    this.db.list('/movie').push(movieObj);
    this.movieName = "";
    this.movielanguage = "";
    this.rating = "";
    this.youtubeTrailer = "";
    this.description = "";
  }

}
