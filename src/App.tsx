import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddMessage from './pages/AddMessage';
import Home from './pages/Home';
import { createRenderer } from 'fela'
import { RendererProvider } from 'react-fela'
import Menu from './components/Menu';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

function App() {
  const renderer = createRenderer();

  const headers = {
    'x-hasura-admin-secret': process.env.REACT_APP_GRAPHQL_SECRET
  };
  const link = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_HTTP,
    headers
  });
  console.log(process.env.REACT_APP_GRAPHQL_HTTP)
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
  return (
    <RendererProvider renderer={renderer}>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Menu />

            <Switch>
              <Route path="/add">
                <AddMessage />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </RendererProvider>
  );
}

export default App;
