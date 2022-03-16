import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from './container/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
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
