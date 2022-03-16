import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./dashboard/users/users.module').then(m => m.UsersModule),
    data: {breadcrumb: {alias: 'dashboard' }}
  },
  {
    path: 'user',
    loadChildren: () => import('./dashboard/user/user.module').then(m => m.UserModule),
    data: {breadcrumb: { alias: 'user' }},
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
