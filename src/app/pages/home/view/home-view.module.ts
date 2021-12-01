import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@ui/material.module';
import { UIModule } from '@ui/ui.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeViewComponent } from './home-view.component';

@NgModule({
  imports: [CommonModule, UIModule, FormsModule, MaterialModule, CarouselModule],
  exports: [HomeViewComponent],
  declarations: [HomeViewComponent],
  providers: [],
})
export class HomeViewModule {}
