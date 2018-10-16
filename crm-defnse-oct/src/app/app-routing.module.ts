import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/containers/login/login.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'prestations',
    loadChildren: './prestations/prestations.module#PrestationsModule',
  },
  {
      path: '**',
      loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule',
    },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true,
        preloadingStrategy: PreloadAllModules }, // <-- debugging purposes only

    )

  ],
})
export class AppRoutingModule { }
