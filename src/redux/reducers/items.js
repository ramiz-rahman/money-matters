import { ITEMS } from '../data/items';
import * as ActionTypes from '../actionTypes';

const Items = (state = ITEMS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ONE_ITEM:
      return { ...state, [action.payload.id]: action.payload.item };
    case ActionTypes.UPDATE_ONE_ITEM:
      return { ...state, [action.payload.id]: action.payload.item };
    case ActionTypes.REMOVE_ONE_ITEM:
      const newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    default:
      return state;
  }
};

export default Items;
