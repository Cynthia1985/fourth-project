
import React, { Component } from 'react';
import Lists from './components/Lists.js';
import ListsForm from './components/ListsForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My List</h1>
        <ListsForm />
        <Lists />
      </div>
    );
  }
}

export default App;
