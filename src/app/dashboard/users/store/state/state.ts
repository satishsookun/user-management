import {deepCopy} from '../../../../utils/deep-copy';
import {UsersModel} from '../actions';

export const users = deepCopy(JSON.parse(window.localStorage.getItem('users')));

export const initialUsersState: UsersModel = users ? users : [];


