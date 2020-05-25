import React from 'react';
import './App.css';

import MyNewComponet from './components/MyNewComponent';


function App() {
  return (
    <div className="App">
      <MyNewComponet name={<h1>Doe, Jane</h1>}/>
      <MyNewComponet age={"Age: 45"}/>
      <MyNewComponet hairColor={"Hair Color: Black"}/>

      <MyNewComponet name={<h1>Smith, John</h1>}/>
      <MyNewComponet age={"Age: 88"}/>
      <MyNewComponet hairColor={"Hair Color: Brown"}/>

      <MyNewComponet name={<h1>Fillmore, Millard</h1>}/>
      <MyNewComponet age={"Age: 50"}/>
      <MyNewComponet hairColor={"Hair Color: Brown"}/>

      <MyNewComponet name={<h1>Smith, Maria</h1>}/>
      <MyNewComponet age={"Age: 62"}/>
      <MyNewComponet hairColor={"Hair Color: Brown"}/>
    </div>
  );
}

export default App;
