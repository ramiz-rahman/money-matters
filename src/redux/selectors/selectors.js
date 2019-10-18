export const getPaidByName = (state, billId) => {
  return Object.values(state.users).find(
    user => user.id === state.bills[billId].paidBy
  ).firstName;
};

export const getBillExpenses = (state, billId) => {
  return Object.values(state.expenses).filter(
    expense => expense.billId === billId
  );
};

export const getParticipants = (state, billId) => {
  return getBillExpenses(state, billId)
    .map(expense => expense.userId)
    .map(userId => state.users[userId].firstName);
};

export const getItemsOfExpense = (state, expenseId) => {
  return Object.values(state.items).filter(
    item => item.expenseId === expenseId
  );
};

export const getExpenseAmount = (state, expenseId) => {
  return getItemsOfExpense(state, expenseId)
    .map(item => Number(item.price))
    .reduce((total, price) => total + price, 0);
};

export const getBillAmount = (state, billId) => {
  return getBillExpenses(state, billId)
    .map(expense => getExpenseAmount(state, expense.id))
    .reduce((total, expenseAmount) => total + expenseAmount, 0);
};
