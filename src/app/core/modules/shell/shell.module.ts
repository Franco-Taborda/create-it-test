import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './view/shell.component';
import { StylesModule } from './styles/styles.module';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '@ui/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, StylesModule, MaterialModule],
  declarations: [ShellComponent, NavbarComponent],
})
export class ShellModule {}
