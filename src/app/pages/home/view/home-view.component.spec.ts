import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { findComponent } from '@shared/utils/test-utils';
import { HomeViewComponent } from './home-view.component';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomeViewComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show a billboard component', () => {
    const billboard = findComponent(fixture, 'app-billboard');
    expect(billboard).toBeTruthy();
  });

  it('should show a top movies row component', () => {
    const topMoviesRow = findComponent(fixture, '[data-test=top-movies-row]');
    expect(topMoviesRow).toBeTruthy();
  });
});
