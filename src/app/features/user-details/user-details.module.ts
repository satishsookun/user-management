import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserDetailsComponent} from './container/user-details.component';

@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    UserDetailsComponent
  ],
  exports: [
    UserDetailsComponent
  ],
  providers: []
})
export class UserDetailsModule { }
