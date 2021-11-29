import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UIModule } from '@ui/ui.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { HomeViewComponent } from './home-view.component';

@NgModule({
  imports: [CommonModule, UIModule, SharedModule, CarouselModule],
  exports: [HomeViewComponent],
  declarations: [HomeViewComponent],
  providers: [],
})
export class HomeViewModule {}
