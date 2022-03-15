import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UserIdModel} from '../models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  public usersIds: UserIdModel[] = [
    {id: 10},
    {id: 18},
    {id: 12},
    {id: 19},
    {id: 25},
  ];

}
