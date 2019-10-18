import { BILLS } from '../data/bills';
import * as ActionTypes from '../actionTypes';

const Bills = (state = BILLS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ONE_BILL:
      return { ...state, [action.payload.id]: action.payload.bill };
    case ActionTypes.UPDATE_ONE_BILL:
      return { ...state, [action.payload.id]: action.payload.bill };
    case ActionTypes.REMOVE_ONE_BILL:
      const newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    default:
      return state;
  }
};

export default Bills;
