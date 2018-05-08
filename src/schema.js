import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

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

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;