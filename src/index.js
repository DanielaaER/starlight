import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloClient, HttpLink, gql, InMemoryCache, ApolloProvider } from "@apollo/client"
import client from './services/Client';



ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
/*   <React.StrictMode>
    <App />
  </React.StrictMode>, */
  document.getElementById("root")
)
