import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { findComponent, findComponentList } from '@shared/utils/test-utils';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FooterComponent],
        imports: [],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  // Social media

  it('should a Facebook element', () => {
    expect(findComponent(fixture, '[data-test=facebook-item]')).toBeTruthy();
  });

  it('should an Instagram element', () => {
    expect(findComponent(fixture, '[data-test=instagram-item]')).toBeTruthy();
  });

  it('should a Twitter element', () => {
    expect(findComponent(fixture, '[data-test=twitter-item]')).toBeTruthy();
  });

  it('should a Youtube element', () => {
    expect(findComponent(fixture, '[data-test=youtube-item]')).toBeTruthy();
  });

  it('should a Linkedin element', () => {
    expect(findComponent(fixture, '[data-test=linkedin-item]')).toBeTruthy();
  });

  // Links

  it('should 13 links', () => {
    expect(findComponentList(fixture, '[data-test=footer-link]')).toHaveSize(13);
  });

  // Copyright

  it('should show a copyright element', () => {
    expect(findComponent(fixture, '[data-test=copyright]').nativeElement.textContent).toEqual(
      '© 1997-2021 Xilften, Inc.',
    );
  });
});
