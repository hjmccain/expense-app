import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
  type Query {
    test: String
    expenses: [Expense!]!
    expense(id: Int!): Expense!
  }

  type Mutation {
    postExpense(
      total: Int!,
      description: String!,
    ): Expense
  }

  type Expense {
    id: Int!
    total: Int!
    description: String!
  }
`;

// const typeDefs = `
// type Query {
//   testString: String
// }
// `;

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema, mocks });

export default schema;