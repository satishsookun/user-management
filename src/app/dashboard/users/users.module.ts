import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './container/users.component';
import {UsersRoutingModule} from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  ],
  entryComponents: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: []
})
export class UsersModule { }
