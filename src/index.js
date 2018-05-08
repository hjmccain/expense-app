const { GraphQLServer } = require('graphql-yoga');

const expenses = [
  { id:0 ,
    total: 202,
    description: 'Amazon-Rinck Prime Account'
  },
  { id: 1,
    total: 56,
    description: 'MikalaDavis'
  },
  { id: 2,
    total: 68,
    description: 'LEWISTON*USA*Orchid'
  },
  { id: 3,
    total: 85,
    description: 'Shaws-Supermarkets'
  }
];

let idCount = expenses.length;

const resolvers = {
  Query: {
    test: () => 'This is a test',
    expenses: () => expenses
  },
  Mutation: {
    post: (root, args) => {
      const expense = {
        id: idCount++,
        total: args.total,
        description: args.description,
      }
      expenses.push(expense);
      return expense;
    }
  },
  Expense: {
    id: root => root.id,
    total: root => root.total,
    description: root => root.description,
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

const port = process.env.PORT || 4000;

server.start(() => console.log(`Server is running on port ${port}`));