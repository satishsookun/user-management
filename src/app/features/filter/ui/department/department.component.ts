import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DepartmentModel} from '../../../../models/user.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-department',
  template: `
    <div class="departments" [formGroup]="formGroup">
      <label id="departments" class="departments__title">Department:</label>
      <mat-radio-group
        aria-labelledby="departments"
        class="departments"
        formControlName="department">
        <mat-radio-button class="departments-radio" *ngFor="let department of departments" [value]="department">
          {{department.name}}
        </mat-radio-button>
      </mat-radio-group>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DepartmentComponent {

  @Input() formGroup: FormGroup;
  @Input() departments: DepartmentModel[] = [];
}
