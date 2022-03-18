import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BreadcrumbComponent} from './container/breadcrumb.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,

    MatIconModule
  ],
  entryComponents: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ],
  providers: []
})
export class UserBreadcrumbModule { }
