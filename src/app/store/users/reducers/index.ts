import {initialUsersState} from '../state/state';
import * as UsersAction from '../actions';
import {UserModel} from '../../../dashboard/users/models/user.model';


export function usersReducer(
  state: UserModel[] = initialUsersState,
  action,
): UserModel[] {
  switch (action.type) {
    case UsersAction.UsersActionsEnum.addUser:
      const newAddedState = [action, ...state];
      return newAddedState;

    case UsersAction.UsersActionsEnum.editUser:
      let newState = state.map( (user) => user.id === action.id ? action : user);
      return newState;

    default:
      return state;
  }
}
