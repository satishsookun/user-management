import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./dashboard/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'create-user',
    loadChildren: () => import('./dashboard/create-user/create-user.module').then(m => m.CreateUserModule),
  },
  {
    path: 'id/edit-user',
    loadChildren: () => import('./dashboard/create-user/create-user.module').then(m => m.CreateUserModule),
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
