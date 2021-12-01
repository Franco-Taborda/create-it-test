import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShellComponent } from './shell.component';
import { StylesModule } from '../styles/styles.module';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { findComponent } from '../../../../shared/utils/test-utils';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [CommonModule, StylesModule, SharedModule, RouterTestingModule, BrowserAnimationsModule],
        declarations: [ShellComponent, NavbarComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a navbar', () => {
    expect(findComponent(fixture, 'app-navbar')).toBeTruthy();
  });

  it('should show a footer', () => {
    expect(findComponent(fixture, 'app-footer')).toBeTruthy();
  });
});
