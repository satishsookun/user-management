import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {UserComponent} from './container/user.component';
import {UserRoutingModule} from './user-routing.module';
import {AddEditUserComponent} from '../../features/add-edit-user/container/add-edit-user.component';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RoutingService} from '../../services/routing.service';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {AddEditUserModule} from '../../features/add-edit-user/add-edit-user.module';

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

    AddEditUserModule
  ],
  entryComponents: [
    UserComponent,
  ],
  providers: [
    RoutingService,
  ]
})
export class UserModule { }
