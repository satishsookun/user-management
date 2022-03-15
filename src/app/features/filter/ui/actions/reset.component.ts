import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-filter-reset-button',
  template: `
    <div class="reset">
      <button class="btn btn--primary btn--outlined  btn--sm" (click)="onReset()">Reset</button>
    </div>
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetComponent {

  @Output() emitResetFilter: EventEmitter<void>;

  constructor() {
    this.emitResetFilter = new EventEmitter<void>();
  }

  public onReset() {
    this.emitResetFilter.emit();
  }
}
