import logo from './images/logo.png';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <div className="logo_container">
        <h1>ABACUS</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
    </div>
  );
}

export default App;
