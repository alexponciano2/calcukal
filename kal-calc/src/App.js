import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  function handleInput1Change(event) {
    setInput1Value(event.target.value);
  }

  function handleInput2Change(event) {
    setInput2Value(event.target.value);
  }

  function handleButtonClick() {
    const result = parseInt(input1Value) - 9 + parseInt(input2Value) + 9;
    console.log(result);
}


  return (
    <div>
      <input type="text" value={input1Value} onChange={handleInput1Change} />
      <input type="text" value={input2Value} onChange={handleInput2Change} />
      <button onClick={handleButtonClick}>Calcular</button>
    </div>
  );
}

export default App;