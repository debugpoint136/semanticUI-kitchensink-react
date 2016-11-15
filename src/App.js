import React, { Component } from 'react';
import Header from './Header';
import { Divider } from 'semantic-ui-react'
import Kitchen from './Kitchen';
import LabelExampleRibbon from './LabelExampleRibbon';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Kitchen />
        <Divider clearing hidden />
        <LabelExampleRibbon />
      </div>
    );
  }
}

export default App;
