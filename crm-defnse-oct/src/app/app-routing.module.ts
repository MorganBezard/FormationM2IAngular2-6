import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/containers/login/login.component';


const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'prestations',
    loadChildren: './prestation/prestations.module#PrestationsModule',
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
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
})
export class AppRoutingModule { }
