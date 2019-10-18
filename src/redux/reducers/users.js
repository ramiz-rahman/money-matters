import { USERS } from '../data/users';
import * as ActionTypes from '../actionTypes';

const Users = (state = USERS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ONE_USER:
      return { ...state, [action.payload.id]: action.payload.user };
    case ActionTypes.UPDATE_ONE_USER:
      return { ...state, [action.payload.id]: action.payload.user };
    case ActionTypes.REMOVE_ONE_USER:
      const newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    default:
      return state;
  }
};

export default Users;
