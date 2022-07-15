import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Play} from '../src/components/Play/play';
import {useOnEnter} from './components/Terminal/useOnEnter';

function App() { 
  const [consoleInput, updateConsoleInput] = useState([]);

  return (
    <div>
          <Play consoleInput = {consoleInput} updateConsoleInput = {updateConsoleInput}/>
    </div>
  );
}

export default App;
