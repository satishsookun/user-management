import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddEditUserComponent} from '../../features/add-edit-user/container/add-edit-user.component';

const routesUser: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full',
  },
  {
    path: 'create',
    component: AddEditUserComponent,
    data: {alias: 'create'}
  },
  {
    path: ':id/edit',
    component: AddEditUserComponent,
    data: {alias: 'edit'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesUser)],
  exports: [RouterModule],
})

export class UserRoutingModule {

}
