import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './container/user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  providers: []
})
export class UserModule { }
