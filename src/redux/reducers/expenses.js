import { EXPENSES } from '../data/expenses';
import * as ActionTypes from '../actionTypes';

const Expenses = (state = EXPENSES, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ONE_EXPENSE:
      return { ...state, [action.payload.id]: action.payload.expense };
    case ActionTypes.UPDATE_ONE_EXPENSE:
      return { ...state, [action.payload.id]: action.payload.expense };
    case ActionTypes.REMOVE_ONE_EXPENSE:
      const newState = { ...state };
      delete newState[action.payload.id];
      return { ...newState };
    default:
      return state;
  }
};

export default Expenses;
