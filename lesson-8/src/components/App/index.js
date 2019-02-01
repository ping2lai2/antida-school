import React from 'react';
/*
import Button from '../Button';
import ItemsList from '../ItemsList';
*/

import './style.scss';

class App extends React.Component {
  state = { name: '', text: '', agree: false }
  createNewItem = (e) => {
    e.preventDefault();
    console.log(e);
  }
  render() {
    return (
      <div className="app">
        <button className="button" onClick={(e) => this.createNewItem(e)}>click</button>
        
      </div>
    );
  }
}

export default App;
