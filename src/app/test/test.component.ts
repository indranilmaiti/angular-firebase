import { Component } from '@angular/core';
import { MovieDetail } from '../models/movies';

@Component({
    selector: 'test-coponent',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent {
    textvalue: string;
    isDivVisible = false;
    movieList: Array<MovieDetail>;

    showMovielist() {
        this.movieList = new Array<MovieDetail>();
        for (let i = 0; i < 10; i++) {
            let movie = new MovieDetail();
            movie.id = i;
            movie.movieName = "My Movie " + i;
            this.movieList.push(movie);

        }
    }


    toggleClicked() {
        if (this.isDivVisible == true) {
            this.isDivVisible = false;
        }
        else {
            this.isDivVisible = true;
        }
    }
}