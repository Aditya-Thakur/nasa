import React, { Component } from 'react';
import NavBar from './containers/navbar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {

  render() {
    return (
      <div>

        <NavBar />

        <Switch>
           <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
        </Switch>

      </div>
    );
  }
}

export default App;