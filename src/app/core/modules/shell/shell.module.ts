import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@ui/material.module';

import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StylesModule } from './styles/styles.module';
import { ShellComponent } from './view/shell.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, StylesModule, MaterialModule, FontAwesomeModule],
  declarations: [ShellComponent, NavbarComponent, FooterComponent],
})
export class ShellModule {}
