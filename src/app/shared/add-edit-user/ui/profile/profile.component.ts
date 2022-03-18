import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {DepartmentModel, JobTitleModel} from '../../../../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './profile.component.html'
})

export class ProfileComponent {

  @Input() createUser: FormGroup;
  @Input() isSubmitted: boolean;
  @Input() departments: DepartmentModel[];
  @Input() jobTitles: JobTitleModel[];
}
