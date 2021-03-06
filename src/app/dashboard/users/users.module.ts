import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './container/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FilterModule} from '../../shared/filter/filter.module';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from '../../store/users/reducers';
import {UsersStore} from '../../services/users-store';
import {UserActionsComponent} from './ui/actions/actions.component';
import {DialogModule} from '../../shared/dialog/dialog.module';
import {FilterCoreService} from '../../shared/filter/services/filter-core.service';

@NgModule({
  declarations: [
    UsersComponent,
    UserActionsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    DialogModule,

    FilterModule,

    StoreModule.forFeature('usersFeature', usersReducer),
  ],
  entryComponents: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    UsersStore,
    FilterCoreService
  ]
})
export class UsersModule { }
