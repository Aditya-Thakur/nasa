import React, { Component } from 'react';
import NavBar from './containers/navbar/NavBar';
import NavItem from './containers/navbar/NavItem';
import { ReactComponent as BellIcon } from './assets/icons/bell.svg';
import { ReactComponent as MessengerIcon } from './assets/icons/messenger.svg';
import { ReactComponent as PlusIcon } from './assets/icons/plus.svg';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';

class App extends Component {

  render() {
    return (
      <div>

        <NavBar>
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          <NavItem icon={<MessengerIcon />} />
        </NavBar>

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