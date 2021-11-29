import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UIModule } from '@ui/ui.module';

import { HomeViewComponent } from './home-view.component';

@NgModule({
  imports: [UIModule, SharedModule],
  exports: [HomeViewComponent],
  declarations: [HomeViewComponent],
  providers: [],
})
export class HomeViewModule {}
