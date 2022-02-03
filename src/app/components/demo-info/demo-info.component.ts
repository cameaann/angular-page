import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-info',
  templateUrl: './demo-info.component.html',
  styleUrls: ['./demo-info.component.scss']
})
export class DemoInfoComponent implements OnInit {
  userLanguage;
  brString;
  constructor() { }

  ngOnInit() {
    this.userLanguage = window.navigator.language;
    console.log(this.userLanguage);

    if(this.userLanguage == "ru"){
      this.brString = "Это демо-проект для портфолио Шестаковой Анны. Мой email: cameaann@gmail.com";

    }
    else{
      this.brString = "This demo-project is made for Anna Shestakova's portfolio. My email: cameaann@gmail.com";
    }
  }

}
