import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesComponent } from './styles.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StylesComponent],
  exports: [StylesComponent],
})
export class StylesModule {}
