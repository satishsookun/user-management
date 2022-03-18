import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {JobTitleModel} from '../../../../models/user.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-job-title',
  template: `
    <div class="job-title" [formGroup]="formGroup">
      <mat-form-field appearance="fill">
        <mat-label>Job Title: </mat-label>
        <mat-select formControlName="jobTitle">
          <mat-option *ngFor="let jobTitle of jobTitles" [value]="jobTitle">
            {{jobTitle.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobTitleComponent {

  @Input() formGroup: FormGroup;
  @Input() jobTitles: JobTitleModel[] = [];

  constructor() {}
}
