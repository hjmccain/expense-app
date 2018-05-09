import expenses from './mockData';
import { Expense } from './database';

console.log(':(', Expense);

Expense.create({
  amount: 321,
  description: 'WB*MASON',
});

let idCount = expenses.length;

console.log('hi');

export default {
  Query: {
    test: () => 'This is a test',
    expenses: () => {
      /* Get all expenses from database */
      return expenses
    },
    expense: (obj, args) => {
      /* Get one expense from database */
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
      /* Add an expense to database */
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