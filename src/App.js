import logo from './logo.svg';
import './App.css';
import Text from './form';
import Timer from './timer';
import TodoApp from './todoapp';
import MarkDownEditor from './remarkable';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Text name="World! This is my"/>
      <Timer />
      <TodoApp />
      <MarkDownEditor />
    </div>
    
  );
}

export default App;
