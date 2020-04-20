import React, { Component } from 'react';
import './App.css';

import SmurfList from './SmurfList';
import SmurfAdd from './SmurfAdd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <section className="add-item smurf">
          <SmurfAdd />
        </section>
        <section className="list-view smurf">
          <SmurfList />
        </section>
      </div>
    );
  }
}

export default App;
