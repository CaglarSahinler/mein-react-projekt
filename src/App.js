import logo from './logo.svg';
import './App.css';

const wert = '55';

const dieZahl = () => {
  return '10';
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hallo
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Ich bin {wert} Jahre alt und nicht {dieZahl()}.
        </p>
        <p>Hallo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
