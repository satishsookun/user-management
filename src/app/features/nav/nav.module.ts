import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './container/nav.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
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
