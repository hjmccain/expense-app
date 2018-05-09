import Sequelize from 'sequelize';

const db = new Sequelize('postgres://ijggfaxd:fBsv0xrhInPdI130dAjA0kpQzSu_lNB8@elmer.db.elephantsql.com:5432/ijggfaxd');

export const Expense = db.define('_expense', {
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

// Expense.create({
//   amount: 695,
//   description: 'Frontify',
// });

export default db;