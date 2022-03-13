import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class NavComponent {

  constructor() {}

}
