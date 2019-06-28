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

import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLanguageComponent } from './admin/admin-language/admin-language.component';
import { AdminMoviesComponent } from './admin/admin-movies/admin-movies.component';
import { AdminNewsComponent } from './admin/admin-news/admin-news.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    AppHeaderComponent,
    AdminComponent,
    AdminLanguageComponent,
    AdminMoviesComponent,
    AdminNewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
