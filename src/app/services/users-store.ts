import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {filter, Observable} from 'rxjs';
import {addUserAction, deleteUserAction, editUserAction} from '../store/users/actions';
import {usersSelector} from '../store/users/select';
import {UserModel} from '../dashboard/users/models/user.model';

@Injectable()
export class UsersStore {

  constructor(
    private _store: Store,
  ) {}

  public usersStore$(): Observable<UserModel[]> {
    return this._store.select(usersSelector);
  }

  public dispatchEditedUser(user: UserModel) {
    this._store.dispatch(editUserAction(user))
  }

  public dispatchAddedUser(user: UserModel) {
    this._store.dispatch(addUserAction(user))
  }

  public dispatchDeleteUser(user: UserModel) {
    this._store.dispatch(deleteUserAction(user))
  }

}
