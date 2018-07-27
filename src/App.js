import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SlotsPageContainer from './components/slots_page_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SlotsPageContainer />
      </div>
    );
  }
}

export default App;
