import { Routes, Route } from '@angular/router';
import { ShellComponent } from '@core/modules/shell/view/shell.component';

export class ShellService {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
    };
  }
}
