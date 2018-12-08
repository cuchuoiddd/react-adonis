import React, { Component } from 'react';
import Demo from './components/demo' ;
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Demo/>
      </div>
    );
  }
}

export default App;
