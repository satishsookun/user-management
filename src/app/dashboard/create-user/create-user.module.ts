import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CreateUserComponent} from './container/create-user.component';
import {CreateUserRoutingModule} from './create-user-routing.module';

@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    CreateUserRoutingModule,

    MatFormFieldModule,
    MatInputModule,
  ],
  entryComponents: [
    CreateUserComponent
  ],
  providers: []
})
export class CreateUserModule { }
