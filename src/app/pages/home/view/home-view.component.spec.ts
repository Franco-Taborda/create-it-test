import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { findComponent } from '@shared/utils/test-utils';
import { HomeViewComponent } from './home-view.component';

describe('HomeViewComponent', () => {
  let component: HomeViewComponent;
  let fixture: ComponentFixture<HomeViewComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [HomeViewComponent],
        imports: [FormsModule, CommonModule],
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

  it('should show a top movies row', () => {
    const topMoviesRow = findComponent(fixture, '[data-test=top-movies-row]');
    expect(topMoviesRow).toBeTruthy();
  });

  it('should show a top movies title', () => {
    const topMoviesRow = findComponent(fixture, '[data-test=top-movies-row-title]');
    expect(topMoviesRow).toBeTruthy();
  });

  it('should show a search input', () => {
    const topMoviesRowSearch = findComponent(fixture, '[data-test=top-movies-row-search]');
    expect(topMoviesRowSearch).toBeTruthy();
  });

  it('should emit the top movies query', () => {
    const expected = 'Test';
    const emitterSpy = spyOn(component.topMoviesSearchEvent, 'emit');

    component.topMoviesQuery = expected;
    component.onTopMovieSearch();

    expect(emitterSpy).toHaveBeenCalledOnceWith(expected);
  });
});
