import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {AddEditUserComponent} from './container/add-edit-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './ui/profile/profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {UploadComponent} from './ui/upload/upload.component';

@NgModule({
  declarations: [
    AddEditUserComponent,
    ProfileComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule,
  ],
  entryComponents: [
    AddEditUserComponent
  ],
  exports: [
    AddEditUserComponent
  ],
  providers: []
})
export class AddEditUserModule { }
