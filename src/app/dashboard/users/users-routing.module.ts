import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './container/users.component';
import {NgModule} from '@angular/core';

const routesUsers: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesUsers)],
  exports: [RouterModule],
})

export class UsersRoutingModule {
  
}
