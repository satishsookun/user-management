import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './container/filter.component';
import {MatSelectModule} from '@angular/material/select';
import {UserIdComponent} from './ui/user/id.component';

@NgModule({
  declarations: [
    FilterComponent,
    UserIdComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
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
