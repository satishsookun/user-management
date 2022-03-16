import {State} from '../../../../store/state';
import {UsersModel} from '../actions';

export const usersSelector = (state: State): UsersModel => {
    return state.usersFeature;
};

