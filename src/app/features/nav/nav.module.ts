import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './container/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    NavComponent,
  ],
  exports: [
    NavComponent,
  ],
  providers: []
})
export class NavModule { }
