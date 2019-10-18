import reducer from './index';
import * as Actions from '../actions';
import { BILLS } from '../data/bills';
import { EXPENSES } from '../data/expenses';
import { ITEMS } from '../data/items';
import { USERS } from '../data/users';

const initialState = {
  bills: BILLS,
  expenses: EXPENSES,
  items: ITEMS,
  users: USERS
};

const minimalState = {
  bills: {
    'e09230c0-2261-11e9-8214-d7cf0f457f0f': {
      id: 'e09230c0-2261-11e9-8214-d7cf0f457f0f',
      title: 'Nandos & Crimson Cup',
      date: '2018-12-24',
      paidBy: 'e5da5780-225f-11e9-8214-d7cf0f457f0f'
    }
  },
  expenses: {
    'cf6394a0-2262-11e9-8214-d7cf0f457f0f': {
      id: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: 'e5da5780-225f-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    }
  },
  items: {
    'cd37d3a0-2265-11e9-8214-d7cf0f457f0f': {
      id: 'cd37d3a0-2265-11e9-8214-d7cf0f457f0f',
      name: 'Chicken Tenders',
      price: '483',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    }
  },
  users: {
    'e5da5780-225f-11e9-8214-d7cf0f457f0f': {
      id: 'e5da5780-225f-11e9-8214-d7cf0f457f0f',
      email: 'rana@example.com',
      firstName: 'Rana',
      lastName: 'Rashid'
    }
  }
};

test('Reducer should return the initial state', () => {
  expect(reducer(undefined, initialState)).toEqual(initialState);
});

test('Add item to existing expense', () => {
  const action = Actions.addOneItem({
    name: 'Chicken Wings',
    price: '357',
    expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
  });

  const updatedItems = {
    ...minimalState.items,
    [action.payload.id]: {
      id: action.payload.id,
      name: 'Chicken Wings',
      price: '357',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    }
  };

  expect(reducer(minimalState, action)).toEqual({
    ...minimalState,
    items: updatedItems
  });
});

test('Remove item from existing expense', () => {
  const action = Actions.removeOneItem('cd37d3a0-2265-11e9-8214-d7cf0f457f0f');
  expect(reducer(minimalState, action)).toEqual({
    ...minimalState,
    items: {}
  });
});

test('Update item in existing expense', () => {
    const action = Actions.updateOneBill;

    return
})