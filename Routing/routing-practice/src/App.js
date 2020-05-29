import React from 'react';
import './App.css';

import { Router, Link, navigate } from '@reach/router';
import Home from './components/Home';
import NumberDisplay from './components/NumberDisplay';

function App() {
  const onClickHandler = e => {
    e.preventDefault();
    navigate('/home');
}
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <NumberDisplay path="/:num"/>
      </Router>
      <button onClick={onClickHandler}>Go to home page</button>
    </div>
  );
}

export default App;
