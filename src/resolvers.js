import expenses from './mockData';

let idCount = expenses.length;

export default {
  Query: {
    test: () => 'This is a test',
    expenses: () => expenses,
    expense: (obj, args) => {
      const ids = expenses.filter(el => el.id === args.id);
      return ids[0];
    }
  },
  Mutation: {
    postExpense: (obj, args) => {
      const expense = {
        id: idCount++,
        total: args.total,
        description: args.description,
      }
      expenses.push(expense);
      return expense;
    },
  },
  Expense: {
    id: obj => obj.id,
    total: obj => obj.total,
    description: obj => obj.description,
  }
};