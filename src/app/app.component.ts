import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: String;
  title: String;

  ngOnInit() {
    this.title = 'Hello World from Angular ,By ';
    this.name = 'Karthikeyan Karuppusamy';
    console.log('Component loaded');
  }
  constructor() {

  }
}
