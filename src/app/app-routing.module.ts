import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellService } from '@core/services/shell-service/shell.service';

const routes: Routes = [
  ShellService.childRoutes([
    {
      path: '',
      loadChildren: () => import('@pages/home/home.module').then((m) => m.HomeModule),
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
