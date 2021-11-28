import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from './navbar.component';
import { findComponent } from '@shared/utils/test-utils';
import { MaterialModule } from '@app/ui/material.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavbarComponent],
        imports: [SharedModule, RouterTestingModule, BrowserAnimationsModule, MaterialModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show a logo', () => {
    const logo = findComponent(fixture, '[data-test=logo]');
    expect(logo.attributes['src']).toEqual('assets/images/logo.svg');
  });

  it('should show a home button', () => {
    const homeButton = findComponent(fixture, '[data-test=home-button]');
    expect(homeButton).toBeTruthy();
  });

  it('should show a tv shows button', () => {
    const tvShowsButton = findComponent(fixture, '[data-test=tv-shows-button]');
    expect(tvShowsButton).toBeTruthy();
  });

  it('should show a movies button', () => {
    const moviesButton = findComponent(fixture, '[data-test=movies-button]');
    expect(moviesButton).toBeTruthy();
  });

  it('should show a new and popular button', () => {
    const newAndPopularButton = findComponent(fixture, '[data-test=new-and-popular-button]');
    expect(newAndPopularButton).toBeTruthy();
  });

  it('should show a my list button', () => {
    const myListButton = findComponent(fixture, '[data-test=my-list-button]');
    expect(myListButton).toBeTruthy();
  });

  it('should show a search icon', () => {
    const searchIcon = findComponent(fixture, '[data-test=search-icon]');
    expect(searchIcon).toBeTruthy();
  });

  it('should show a notifications icon', () => {
    const notificationsIcon = findComponent(fixture, '[data-test=notifications-icon]');
    expect(notificationsIcon).toBeTruthy();
  });

  it('should show an account item', () => {
    const accountItem = findComponent(fixture, '[data-test=account-item]');
    const accountImage = findComponent(fixture, '[data-test=account-image]');
    expect(accountItem).toBeTruthy();
    expect(accountImage).toBeTruthy();
  });
});
