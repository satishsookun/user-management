import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {UserComponent} from './container/user.component';
import {UserRoutingModule} from './user-routing.module';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {AddEditUserModule} from '../../shared/add-edit-user/add-edit-user.module';
import {UsersStore} from '../../services/users-store';
import {StoreModule} from '@ngrx/store';
import {usersReducer} from '../../store/users/reducers';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    UserRoutingModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,

    StoreModule.forFeature('usersFeature', usersReducer),

    AddEditUserModule
  ],
  entryComponents: [
    UserComponent,
  ],
  providers: [
    UsersStore,
  ]
})
export class UserModule { }
