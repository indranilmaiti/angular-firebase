import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AngularFireDatabaseModule } from 'angularfire2/database'
// import { AngularFireModule } from 'angularfire2'
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { AppHeaderComponent } from './app-header/app-header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMoviesComponent } from './admin/admin-movies/admin-movies.component';
import { MoviesComponent } from './movies/movies.component';

import { OwlModule } from 'ngx-owl-carousel';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AdminComponent,
    AdminMoviesComponent,
    MoviesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
