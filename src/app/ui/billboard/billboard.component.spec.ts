import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { findComponent } from '@shared/utils/test-utils';
import { MaterialModule } from '@ui/material.module';
import { BillboardComponent } from './billboard.component';

describe('BillboardComponent', () => {
  let component: BillboardComponent;
  let fixture: ComponentFixture<BillboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BillboardComponent],
        imports: [MaterialModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardComponent);
    component = fixture.componentInstance;
    component.billboard = {
      bgImgSrc: 'test/source',
      releaseDate: 'test date',
      summary: 'Test summary,',
      title: 'Test title',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show a background image', () => {
    const bgImg = findComponent(fixture, '[data-test=billboard-image] img');
    expect(bgImg.attributes['src']).toEqual(component.billboard.bgImgSrc);
  });

  it('should show a release date', () => {
    const description = findComponent(fixture, '[data-test=billboard-release-date]');
    expect(description).toBeTruthy();
  });

  it('should show a description', () => {
    const description = findComponent(fixture, '[data-test=billboard-description]');
    expect(description).toBeTruthy();
  });

  it('should show a play button', () => {
    const playButton = findComponent(fixture, '[data-test=play-button]');
    expect(playButton).toBeTruthy();
  });
});
