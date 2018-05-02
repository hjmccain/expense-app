/*eslint no-console: "off" */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools'); 

const typeDefs = `
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: { hello: () => "hello world!" }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Add a 'catchall' handler, so that for any requests that don't match the one(s) outlined
// above, React's index.html file will be sent back.
app.get('*', (req, res) => res.sendFile(path.join(__dirname + '/client/build/index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});