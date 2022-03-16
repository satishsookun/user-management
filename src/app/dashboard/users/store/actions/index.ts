import { createAction, props} from '@ngrx/store';
import {UserModel} from '../../models/user.model';

export enum UsersActionsEnum {
    editUser = '[Edit user] update localStorage with edited user',
    addUser = '[add user] update localStorage with newly created user',
}

export interface UsersModel {
  users: UserModel[];
}

export const editUserAction = createAction(UsersActionsEnum.editUser, props<{id: number; user: UserModel}>());
export const addUserAction = createAction(UsersActionsEnum.addUser, props<{id: number; user: UserModel}>());
