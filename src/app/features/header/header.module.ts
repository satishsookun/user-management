import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './container/header.component';
import {UserBreadcrumbModule} from '../breadcrumb/user-breadcrumb.module';
import {BreadcrumbModule} from 'xng-breadcrumb';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UserBreadcrumbModule,
    BreadcrumbModule,
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
