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

function App() {
  const renderer = createRenderer();
  return (
    <RendererProvider renderer={renderer}>
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
    </RendererProvider>
  );
}

export default App;
