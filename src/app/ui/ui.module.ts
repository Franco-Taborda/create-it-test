import { NgModule } from '@angular/core';
import { BillboardModule } from './billboard/billboard.module';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, BillboardModule],
  exports: [BillboardModule],
})
export class UIModule {}
