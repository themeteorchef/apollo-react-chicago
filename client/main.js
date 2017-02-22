import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import Books from '../imports/ui/containers/Books';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:4000/graphql' }),
});

render(
  <ApolloProvider client={ client }>
    <Books />
  </ApolloProvider>,
  document.getElementById('react-root')
);
