import React, { useState } from 'react';
import './App.css';

import PersonCard from './components/PersonCard';
import UserForm from './components/UserForm';
import Results from './components/Results';
import MovieForm from './components/MovieForm';
function App() {
  const [ state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState}/>
      <Results data={state} />
      {/* <MovieForm/> */}
    </div>
  );
}

export default App;
