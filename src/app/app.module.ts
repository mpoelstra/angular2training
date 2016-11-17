import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SlidesModule } from './slides/slides.module';

import { AppComponent } from './app.component';
import { QuoteComponent } from './shared/quote.component'

//import { HighlightJsModule, HighlightJsService } from '../../node_modules/angular2-highlight-js'; //or for angular-cli the path will be ../../node_modules/angular2-highlight-js


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SlidesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
