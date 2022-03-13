import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './container/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export class HeaderModule { }
