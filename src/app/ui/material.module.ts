import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [MatSliderModule, MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule],
  exports: [MatSliderModule, MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule],
})
export class MaterialModule {}
