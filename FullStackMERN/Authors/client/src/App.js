import React from 'react';
import { Router } from '@reach/router';
import './App.css';

import Main from './views/Main';
import New from './views/New';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/author" />
        <New path ="/new" />
        <Update path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
