import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MovieDetail } from '../models/movies';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  constructor(private db: AngularFireDatabase, private sanitizer: DomSanitizer, private activatedRoute: ActivatedRoute) { }

  movieList: Array<MovieDetail>;
  rawMovieList: Array<MovieDetail>;



  ngOnInit() {
    this.getMovies();
  }

  movieSubscriber;

  getMovies() {
    this.movieSubscriber = this.db.list('/movie').valueChanges().subscribe((moviedata) => {
      this.movieList = [];
      this.rawMovieList = [];
      for (let i = 0; i < moviedata.length; i++) {
        let movieObj = new MovieDetail();
        movieObj.description = (<any>moviedata[i]).description;
        movieObj.id = i;
        movieObj.language = (<any>moviedata[i]).language;
        movieObj.movieName = (<any>moviedata[i]).movieName;
        movieObj.rating = (<any>moviedata[i]).rating;
        movieObj.trailer = <string>this.sanitizer.bypassSecurityTrustResourceUrl((<any>moviedata[i]).trailer);

        this.movieList.push(movieObj);
        this.rawMovieList.push(movieObj);

      }
    })
  }


  onFilterMovies(filteredMovieList) {
    this.movieList = [...filteredMovieList];
  }

  ngOnDestroy() {
    if (!!this.movieSubscriber) {
      this.movieSubscriber.unsubscribe();
    }
  }

}
