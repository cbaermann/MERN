import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {    
  render(){        
      return (            
          <>                
              <h1>Welcome React</h1>                
              <h3>Things I need to do:</h3>  
              <ul>
                <li>Learn React</li>
                <li>Climb Everest</li>
                <li>Run a marathon</li>
                <li>Feed the animals</li>
              </ul>          
          </>        
      );    
  }
}

export default App;
