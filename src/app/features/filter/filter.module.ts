import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './container/filter.component';
import {MatSelectModule} from '@angular/material/select';
import {DepartmentComponent} from './ui/department/department.component';
import {OccupationComponent} from './ui/occupation/occupation.component';
import {MatRadioModule} from '@angular/material/radio';
import {ResetComponent} from './ui/actions/reset.component';
import {SearchComponent} from './ui/actions/search.component';
import {FilterFormService} from './services/filter-form.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    FilterComponent,
    DepartmentComponent,
    OccupationComponent,
    ResetComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ],
  providers: [
    FilterFormService
  ]
})
export class FilterModule { }
