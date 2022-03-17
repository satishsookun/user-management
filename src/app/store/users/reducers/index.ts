import {initialUsersState} from '../state/state';
import * as UsersAction from '../actions';
import {UserModel} from '../../../dashboard/users/models/user.model';


export function usersReducer(
  state: UserModel[] = initialUsersState,
  action,
): UserModel[] {
  switch (action.type) {
    case UsersAction.UsersActionsEnum.addUser:
      return [action, ...state];

    case UsersAction.UsersActionsEnum.editUser:
      let newEditState = state.map( (user) => user.id === action.id ? action : user);
      return newEditState;

    case UsersAction.UsersActionsEnum.deleteUser:
      let newDeleteState = [...state];
      if (state.length < 2) {
        newDeleteState = [];
      } else {
        newDeleteState = newDeleteState.filter( (user) => user.id !== action.id);
      }
      return newDeleteState;

    default:
      return state;
  }
}
