import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {filter, Observable} from 'rxjs';
import {addUserAction, editUserAction, UsersModel} from '../dashboard/users/store/actions';
import {usersSelector} from '../dashboard/users/store/select';
import {UserModel} from '../dashboard/users/models/user.model';

@Injectable()
export class UsersStore {

  constructor(
    private _store: Store,
  ) {}

  public usersStore$(): Observable<UsersModel> {
    return this._store.select(usersSelector).pipe(
      filter( (storeRes) => !!storeRes)
    );
  }

  public dispatchEditedUser(user: UserModel) {
    this._store.dispatch(editUserAction({id: user.id, user}))
  }

  public dispatchAddedUser(user: UserModel) {
    this._store.dispatch(addUserAction({id: user.id, user}))
  }

}
