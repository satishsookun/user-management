import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user-actions',
  templateUrl: './actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserActionsComponent {

  @Output() emitDeleteUser: EventEmitter<void>;
  @Output() emitEditUser: EventEmitter<void>;
  @Output() emitViewUser: EventEmitter<void>;

  constructor() {
    this.emitDeleteUser = new EventEmitter<void>();
    this.emitEditUser = new EventEmitter<void>();
    this.emitViewUser = new EventEmitter<void>();
  }

  deleteUser() {
    this.emitDeleteUser.emit();
  }

  editUser() {
    this.emitEditUser.emit();
  }

  viewProfile() {
    this.emitViewUser.emit();
  }
}
