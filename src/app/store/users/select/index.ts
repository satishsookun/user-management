import {State} from '../../state';
import {UserModel} from '../../../dashboard/users/models/user.model';

export const usersSelector = (state: State): UserModel[] => {
    window.localStorage.setItem('users', (JSON.stringify(state.usersFeature ? state.usersFeature : [])));
    return state.usersFeature;
};

