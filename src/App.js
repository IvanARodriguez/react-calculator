import './App.css';
import logo from './images/logo.png';
import Button from  './components/Button'

function App() {
  
  return (
    <div className="App">
      <div className="logo_container">
        <h1>ABACUS</h1>
      </div>
      <div className="calculator_wrapper">
        <div className="calculator_display">0</div>
        <div className="row">
          <Button>AC</Button>
          <Button><sup>+</sup>/<sub>-</sub></Button>
          <Button>%</Button>
          <Button>/</Button>
        </div>
        <div className="row">
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>x</Button>
        </div>
        <div className="row">
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className="row">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className="row custom_row">
          <Button>0</Button>
          <Button>.</Button>
          <Button>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
