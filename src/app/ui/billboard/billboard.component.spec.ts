import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { findComponent } from '@shared/utils/test-utils';
import { BillboardComponent } from './billboard.component';

describe('BillboardComponent', () => {
  let component: BillboardComponent;
  let fixture: ComponentFixture<BillboardComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BillboardComponent],
        imports: [],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BillboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should show a background image', () => {
    component.bgImgSource = 'test/source';
    fixture.detectChanges();

    const bgImg = findComponent(fixture, '[data-test=billboard-image]');
    expect(bgImg.attributes['src']).toEqual(component.bgImgSource);
  });
});
