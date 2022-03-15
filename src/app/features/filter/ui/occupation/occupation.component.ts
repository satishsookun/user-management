import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {DepartmentModel, OccupationModel} from '../../../../models/user.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-occupations',
  template: `
    <div class="occupations" [formGroup]="formGroup">
      <mat-form-field appearance="fill">
        <mat-label>Occupation: </mat-label>
        <mat-select formControlName="occupation">
          <mat-option *ngFor="let occupation of occupations" [value]="occupation.slug">
            {{occupation.name}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OccupationComponent {

  @Input() formGroup: FormGroup;
  @Input() occupations: OccupationModel[] = [];

  constructor() {
    console.log(this.occupations, '<<< occupations');
  }
}
