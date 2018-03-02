import React, { Component } from 'react';
import './css/App.css';

import Header from './Header.js'
import TaskDescription from './TaskDescription.js'
import TaskArea from './TaskArea.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <TaskDescription/>
          <TaskArea/>
      </div>
    );
  }
}

export default App;
