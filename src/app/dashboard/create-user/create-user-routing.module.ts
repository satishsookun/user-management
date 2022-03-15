import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CreateUserComponent} from './container/create-user.component';

const routesCreateUser: Routes = [
  {
    path: '',
    component: CreateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesCreateUser)],
  exports: [RouterModule],
})

export class CreateUserRoutingModule {

}
