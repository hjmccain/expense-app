const { GraphQLServer } = require('graphql-yoga');

const resolvers = {

}

const server = new GraphQLServer({
  typeDefs: './src/scheme.graphql',
  resolvers,
});

const port = process.env.PORT || 4000;

server.start(() => console.log(`Server is running on port ${port}`));