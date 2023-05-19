import React from 'react';
import './App.css';
import Calculator from './Calculator/Calculator';

function App(props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-[#C2C2D6]">
      <Calculator />
    </div>
  );
}

export default App;