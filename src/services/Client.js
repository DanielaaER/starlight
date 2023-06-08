import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    //uri: "http://40.124.129.166:3000/graphql",
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  request: (operation) => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
});

export default client;