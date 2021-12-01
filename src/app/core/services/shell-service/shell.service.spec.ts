import { TestBed } from '@angular/core/testing';
import { ShellComponent } from '@core/modules/shell/view/shell.component';
import { ShellService } from './shell.service';

describe('Shell', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellComponent],
    });
  });

  describe('childRoutes', () => {
    it('should create routes as children of shell', () => {
      const testRoutes = [{ path: 'test' }];
      const result = ShellService.childRoutes(testRoutes);
      expect(result.path).toBe('');
      expect(result.children).toBe(testRoutes);
      expect(result.component).toBe(ShellComponent);
    });
  });
});
