import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UserIdModel} from '../../models/filter.model';

@Component({
  selector: 'app-user-id',
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Id: </mat-label>
      <mat-select>
        <mat-option *ngFor="let user of usersIds" [value]="user.id">
          {{user.id}}
        </mat-option>
      </mat-select>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserIdComponent {

  @Input() usersIds: UserIdModel[] = [];
}
