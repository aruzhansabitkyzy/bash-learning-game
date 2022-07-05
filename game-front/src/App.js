import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Play} from '../src/components/Play/play';

function App() { 

  return (
    <div>
          <Play />
    </div>
  );
}

export default App;
