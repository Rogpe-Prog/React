import React from 'react';
import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter'

function App() {
  return (
    <div className="App">
      <h2>Conveter</h2>
      <div className="line">
        <Converter moneyA="USD" moneyB="BRL"></Converter>
        <Converter moneyA="BRL" moneyB="USD"></Converter>
      </div>
    </div>
  );
}

export default App;
