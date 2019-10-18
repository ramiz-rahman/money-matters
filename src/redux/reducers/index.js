import { combineReducers } from 'redux';
import bills from './bills';
import expenses from './expenses';
import items from './items';
import users from './users';

const app = combineReducers({ bills, expenses, items, users });

export default app;
