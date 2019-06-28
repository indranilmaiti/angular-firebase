import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Language } from '../../models/language';

@Component({
  selector: 'app-admin-language',
  templateUrl: './admin-language.component.html',
  styleUrls: ['./admin-language.component.css']
})
export class AdminLanguageComponent implements OnInit {

  constructor(private db: AngularFireDatabase) { }

  languagelist: Array<Language> = [
    { id: 1, name: "Hindi" },
    { id: 2, name: "English" },
    { id: 3, name: "Bengali" }
  ]

  ngOnInit() {    
    this.languagelist = [];
    this.db.list('/language').valueChanges().subscribe((dbData) => {
      this.languagelist = [];
      for (let i = 0; i < dbData.length; i++) {
        let langObj = new Language();
        langObj.id = i;
        langObj.name = (<any>dbData[i]).name;
        this.languagelist.push(langObj);
      }
    })
  }

  languageName: string;

  createlanguage() {
    if (!!this.languageName) {
      let index = this.languagelist.findIndex((x) => {
        return x.name == this.languageName;
      });
      if (index == -1) {
        let langObj = new Language();
        langObj.name = this.languageName;
        this.db.list('/language').push(langObj);
        this.languageName = "";
      }
    }
  }

}
