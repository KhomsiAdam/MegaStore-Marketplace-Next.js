import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

import { setContext } from "@apollo/client/link/context";
import { store } from "@/redux/store";

const authLink = setContext((_, { headers }) => {
  const { user } = store.getState();
  console.log(user);

  // get the authentication token from local storage if it exists
  const token = user.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(
    createUploadLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    })
  ),
});

export default apolloClient;
