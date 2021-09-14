import React from 'react';
import logo from './logo.svg';
import './App.css';

export class NewComponent extends React.Component {
  render() {
    return <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

    </header>;
  }
}

function App() {
  return (
    <div className="App">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
