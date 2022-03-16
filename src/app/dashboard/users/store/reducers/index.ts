import {initialUsersState} from '../state/state';
import {UsersModel} from '../actions';
import * as UsersAction from '../actions';


export function usersReducer(
  state: UsersModel = initialUsersState,
  action,
): UsersModel {
  switch (action.type) {
    case UsersAction.UsersActionsEnum.addUser:
      console.log('add reducer>>', state, '<<>>>>', action);
      return {
        ...state
      };

    case UsersAction.UsersActionsEnum.editUser:
      console.log('edit reducer>>', state, '<<>>>>', action);
      return {
        ...state
      };

    default:
      return state;
  }
}
