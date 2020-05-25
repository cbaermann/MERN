import React from 'react';
import './App.css';

import MyNewComponet from './components/MyNewComponent';


function App() {
  return (
    <div className="App">
      <MyNewComponet>
        {/* <button onClick={this.incrementAge}>Birthday Button</button> */}
      </MyNewComponet>
      {/* <MyNewComponet name={<h1>Doe, Jane</h1>}/>
      <MyNewComponet age={45}/>
      <MyNewComponet hairColor={"Hair Color: Black"}/>

      <MyNewComponet name={<h1>Smith, John</h1>}/>
      {/* <MyNewComponet age={"Age: " + 88}/> */}
      {/* <MyNewComponet hairColor={"Hair Color: Brown"}/>

      <MyNewComponet name={<h1>Fillmore, Millard</h1>}/>
      {/* <MyNewComponet age={"Age: " + 50}/> */}
      {/* <MyNewComponet hairColor={"Hair Color: Brown"}/>

      <MyNewComponet name={<h1>Smith, Maria</h1>}/>
      {/* <MyNewComponet age={"Age: " + 62}/> */}
      {/* <MyNewComponet hairColor={"Hair Color: Brown"}/> */} */} */} */}

        {/* <MyNewComponet header={ "Doe, Jane" }>
            <p>This is a child</p>
            <p>Hair Color: Black</p>
            <MyNewComponet age={`Age: ${44}`}/>
            <button onClick={ () => alert("This button has been clicked")}>Birthday Button for Doe, Jane!</button>
            {/* <button onClick={ () => { this.setState({ age: this.state.age + 1}) }}>Flip Switch</button> */}
            {/* <button onClick={this.incrementAge}>Birthday Button</button> */}
        {/* </MyNewComponet>  

        <MyNewComponet header={ "Smith, John" }>
            <p>This is a child</p>
            <p>Hair Color: Brown</p>
            <button onClick={ () => alert("This button has been clicked")}>Birthday button for Smith, John!</button>

        </MyNewComponet>  

        <MyNewComponet header={ "Fillmore, Millard" }>
            <p>This is a child</p>
            <p>Hair Color: Brown</p>
            <button onClick={ () => alert("This button has been clicked")}>Birthday button for Fillmore, Millard!</button>

        </MyNewComponet>  

        <MyNewComponet header={ "Smith, Maria" }>
            <p>This is a child</p>
            <p>Hair Color: Brown</p>
            <button onClick={ () => alert("This button has been clicked")}>Birthday button for Smith, Maria!</button>

        </MyNewComponet>   */} */}

    </div>
  );
}

export default App;
