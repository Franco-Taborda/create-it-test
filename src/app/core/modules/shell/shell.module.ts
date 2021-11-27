import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './view/shell.component';
import { StylesModule } from './styles/styles.module';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, StylesModule],
  declarations: [ShellComponent, NavbarComponent],
})
export class ShellModule {}
