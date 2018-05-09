import Sequelize from 'sequelize';

const db = new Sequelize('postgres://ijggfaxd:fBsv0xrhInPdI130dAjA0kpQzSu_lNB8@elmer.db.elephantsql.com:5432/ijggfaxd');

const ExpenseModel = db.define('_expense', {
  amount: {
    type: Sequelize.DECIMAL
  },
  description: {
    type: Sequelize.TEXT
  },
  userID: {
    type: Sequelize.INTEGER
  }
});

export const Expense = db.models._expense;

console.log(Expense);

export default db;