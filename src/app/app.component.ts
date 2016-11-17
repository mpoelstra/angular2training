import { Component, OnInit, ElementRef } from '@angular/core';

import { SlideService } from './services/slides.service'
//import { SlidesModule } from 'ng2-slides';

//import { HighlightJsService } from '../../node_modules/angular2-highlight-js'; //or for angular-cli the path will be ../../node_modules/angular2-highlight-js


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
      private slide: SlideService // <-- make sure you remember to inject the slide service.
      //private service: HighlightJsService
  ) {}

  ngOnInit() {
      this.slide.init();
  }
}
