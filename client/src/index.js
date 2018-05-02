import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './style/index.css';

import ApolloClient from 'apollo-boost';
import gql from "graphql-tag";

// defaults to /graphql on app host if no uri object is passed
const client = new ApolloClient({
  uri: `http:localhost:5000/graphql`
});

client.query({
  query: gql`
    {
      hello
    }
  `
}).then(res => console.log(res));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
