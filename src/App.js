import React, { Component } from 'react';
import NavBar from './containers/shared/navbar/NavBar';
import Home from './containers/Home/Home';

class App extends Component {

  render() {
    return (
      <div>

        <NavBar />

        <Home />

      </div>
    );
  }
}

export default App;