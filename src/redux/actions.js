import generateId from 'uuid/v1';
import * as ActionTypes from './actionTypes';

export const addOneBill = bill => {
  return {
    type: ActionTypes.ADD_ONE_BILL,
    payload: {
      id: generateId(),
      bill: bill
    }
  };
};

export const updateOneBill = (billId, bill) => {
  return {
    type: ActionTypes.UPDATE_ONE_BILL,
    payload: {
      id: billId,
      bill: bill
    }
  };
};

export const removeOneBill = billID => {
  return {
    type: ActionTypes.REMOVE_ONE_BILL,
    payload: {
      id: billID
    }
  };
};

export const addOneItem = item => {
  const UUID = generateId();
  return {
    type: ActionTypes.ADD_ONE_ITEM,
    payload: {
      id: UUID,
      item: { id: UUID, ...item }
    }
  };
};

export const removeOneItem = itemId => {
  return {
    type: ActionTypes.REMOVE_ONE_ITEM,
    payload: {
      id: itemId
    }
  };
};
