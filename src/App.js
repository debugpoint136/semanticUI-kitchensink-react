import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kitchen from './Kitchen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>Welcome to React</h5>
        </div>
        <Kitchen />
      </div>
    );
  }
}

export default App;
