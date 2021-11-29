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
        imports: [],
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
});
