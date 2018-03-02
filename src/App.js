import React, { Component } from 'react';
import './css/App.css';

import Header from './Header.js'
import TaskDescription from './TaskDescription.js'
import Task from './Task.js'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <TaskDescription/>
          <Task/>
      </div>
    );
  }
}

export default App;
