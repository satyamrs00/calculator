import React from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Calculator from './Calculator/Calculator';

function App(props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <Calculator />
    </div>
  );
}

export default App;