import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../../../dashboard/users/models/user.model';

@Injectable()
export class ManageUserService {

  private _users: UserModel[];
  private _users$: BehaviorSubject<UserModel[]>;

  constructor() {
    this._users$ = new BehaviorSubject<UserModel[]>(this._users);
  }

  set setUser(userInfo: UserModel) {
    this._users = [...this._users, userInfo];
    this._users$.next(this._users)
  }

  get getUserList$(): Observable<UserModel[]> {
    return this._users$.asObservable();
  }

}
