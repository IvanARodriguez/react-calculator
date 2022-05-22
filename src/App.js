import './App.css';
import Button from  './components/Button';
import Display from './components/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const addInput = val =>{

    if(val === 'x') val='*';
    if(val === '%') val='*';
    
    setInput(input + val)
    
  };

  const calculate = ()=>{
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Please enter values to be calculated');
    }
  };

  const addNegative = ()=> {
      (input.toString().includes('-')) ? setInput(input.toString().replace('-', '')) : setInput(`-${input}`) 
  };

  return (
    <div className="App">
      <div className='logo_container'>
        <h1>ABACUS</h1>
      </div>
      <div className='calculator_wrapper'>
        <Display input={input}/>
        <div className='row'>
          <Button handleClick={()=>{setInput('')}}>AC</Button>
          <Button handleClick={addNegative}><sup>+</sup>/<sub>-</sub></Button>
          <Button handleClick={addInput}>%</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>x</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row custom_row'>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={calculate}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
