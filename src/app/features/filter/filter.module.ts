import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './container/filter.component';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
  ],
  entryComponents: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  providers: []
})
export class FilterModule { }
