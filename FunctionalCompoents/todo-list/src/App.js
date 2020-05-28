import React, { useState } from 'react';
import './App.css';

import Input from './components/Input';
function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <Input list={list} setList={setList}/>
    </div>
  );
}

export default App;
