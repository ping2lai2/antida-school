import React from 'react';

import Dumb from '../Dumb';
import Dumb2 from '../Dumb2';
import Smart from '../Smart';

import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Dumb text="lolkek" />
        <Dumb2 />
        <Smart />
      </div>
    );
  }
}

export default App;
