import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeViewModule } from './view/home-view.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer, moviesFeatureKey, MoviesEffects } from '@models/movies/store';
import { CommonModule } from '@angular/common';
import { MovieService } from '@core/services/movie/movie.service';
import { MovieProviderService } from '@shared/providers/movie-provider/movie-provider.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeViewModule,
    StoreModule.forFeature(moviesFeatureKey, reducer),
    EffectsModule.forFeature([MoviesEffects]),
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [MovieService, MovieProviderService],
})
export class HomeModule {}
