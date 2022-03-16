import {deepCopy} from '../../../utils/deep-copy';
import {UserModel} from '../../../dashboard/users/models/user.model';

export const users = window.localStorage.getItem('users') !== 'undefined' && window.localStorage.getItem('users') !== null
  ? deepCopy(JSON.parse(window.localStorage.getItem('users'))) : [];

export const initialUsersState: UserModel[] = users;


