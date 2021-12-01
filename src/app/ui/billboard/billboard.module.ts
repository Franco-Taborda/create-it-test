import { NgModule } from '@angular/core';
import { MaterialModule } from '@ui/material.module';

import { BillboardComponent } from './billboard.component';

@NgModule({
  imports: [MaterialModule],
  exports: [BillboardComponent],
  declarations: [BillboardComponent],
})
export class BillboardModule {}
