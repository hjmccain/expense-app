import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './schema';
import db from './database';

db.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

const PORT = 4000;
const server = express();

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
server.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

server.listen(PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${PORT}/graphiql`
  )
);