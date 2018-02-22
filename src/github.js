import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const GITHUB_API_URI = 'https://api.github.com/graphql';
const endpointLink = createHttpLink({
  uri: GITHUB_API_URI,
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(endpointLink),
  cache: new InMemoryCache(),
});
