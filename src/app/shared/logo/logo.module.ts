import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogoComponent} from './container/logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    LogoComponent
  ],
  exports: [
    LogoComponent
  ],
  providers: []
})
export class LogoModule { }
