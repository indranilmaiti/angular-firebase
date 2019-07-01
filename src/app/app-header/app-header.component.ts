import { Component, OnInit } from '@angular/core';
import { Language } from '../models/language';
import { Router } from '@angular/router'

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  languagelist: Array<Language> = [
    { id: 1, name: "Hindi" },
    { id: 2, name: "English" },
    { id: 3, name: "Bengali" }
  ]

  selectedTab = 'movies';
  constructor(private router: Router) { }

  ngOnInit() {
  }



  adminClicked() {
    this.router.navigate(['/admin']);
    this.selectedTab = 'admin';
  }

  gotoMovies() {
    this.router.navigate(['/movies']);
    this.selectedTab = 'movies';
  }

}
