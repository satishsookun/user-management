import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from './container/side-bar.component';
import {LogoModule} from '../logo/logo.module';

@NgModule({
  declarations: [
    SideBarComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
  ],
  entryComponents: [
    SideBarComponent
  ],
  exports: [
    SideBarComponent,
  ],
  providers: []
})
export class CreateUserModule { }
