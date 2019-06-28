import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import { MovieDetail } from './models/movies'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-training';

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    // this.db.list("/movies").valueChanges().subscribe((movies) => {
    //   console.log(movies);
    // })

    // let movie = new MovieDetail();
    // movie.movieName = 'Kalank';
    // movie.details="asdasd",
    // movie.language="hindi",
    // movie.rating="3",
    // movie.poster="assets/images/poster1"

    // this.db.list("/movies").push(movie)
  }
}
