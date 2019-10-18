import { BILLS } from '../data/bills';
import { EXPENSES } from '../data/expenses';
import { ITEMS } from '../data/items';
import { USERS } from '../data/users';

import {
  getPaidByName,
  getParticipants,
  getBillExpenses,
  getBillAmount,
  getItemsOfExpense,
  getExpenseAmount
} from './selectors';

const state = {
  bills: BILLS,
  expenses: EXPENSES,
  items: ITEMS,
  users: USERS
};
const billIds = Object.keys(BILLS);
const bills = Object.values(BILLS);

const expenseIds = Object.keys(EXPENSES);

test('getPaidByName', () => {
  expect(getPaidByName(state, billIds[0])).toBe('Rana');
  expect(getPaidByName(state, billIds[1])).toBe('Imran');
  expect(getPaidByName(state, billIds[2])).toBe('Shorna');
});

test('getBillExpenses', () => {
  expect(getBillExpenses(state, billIds[0])).toEqual([
    {
      id: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: 'fae66a00-2260-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '72f2a790-2264-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: 'e5da5780-225f-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '79a5be10-2264-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: 'e5c80b30-2263-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '7e349500-2264-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: '5a6ed370-2263-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '85c58860-2264-11e9-8214-d7cf0f457f0f',
      cleared: false,
      userId: 'e4fc3710-2260-11e9-8214-d7cf0f457f0f',
      billId: 'e09230c0-2261-11e9-8214-d7cf0f457f0f'
    }
  ]);
});

test('getParticipants', () => {
  expect(getParticipants(state, billIds[0])).toEqual([
    'Imran',
    'Rana',
    'Raian',
    'Pratik',
    'Wasim'
  ]);
  expect(getParticipants(state, billIds[1])).toEqual([
    'Imran',
    'Raian',
    'Rhythm',
    'Wasim',
    'Rana'
  ]);
  expect(getParticipants(state, billIds[2])).toEqual([
    'Mifta',
    'Nabila',
    'Mayisha',
    'Rezwana',
    'Shorna'
  ]);
});

test('getItemsOfExpense', () => {
  expect(getItemsOfExpense(state, expenseIds[0])).toEqual([
    {
      id: 'cd37d3a0-2265-11e9-8214-d7cf0f457f0f',
      name: 'Chicken Tenders',
      price: '483',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '2aa84470-2266-11e9-8214-d7cf0f457f0f',
      name: 'Caramel Latte',
      price: '242',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    },
    {
      id: '2fc99760-2266-11e9-8214-d7cf0f457f0f',
      name: 'Peri Soup',
      price: '172',
      expenseId: 'cf6394a0-2262-11e9-8214-d7cf0f457f0f'
    }
  ]);
});

test('getExpenseAmount', () => {
  expect(getExpenseAmount(state, expenseIds[0])).toBe(897);
});

test('getBillAmount', () => {
  expect(getBillAmount(state, billIds[0])).toBe(4463);
});
