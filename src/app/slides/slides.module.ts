import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides.component';
import { SlideService } from '../services/slides.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SlidesComponent //export the components which can be used by other modules
  ],
  providers: [
  	SlideService
  ],
  declarations: [SlidesComponent]
})
export class SlidesModule { }