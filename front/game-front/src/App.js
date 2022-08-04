import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Play} from '../src/components/Play/play';
import {useOnEnter} from './components/Terminal/useOnEnter';
import {Header} from './components/Play/header';
import Login from './components/Play/Login';
import Register from './components/Play/Register';

function App() { 
  const [consoleInput, updateConsoleInput] = useState([]);
  const [entered, setEntered] = useState(false);
  return (
    <Router>
    <div>
        <Header />
        <Routes>
             <Route exact path='/' element = {<Play  consoleInput = {consoleInput} updateConsoleInput = {updateConsoleInput} entered = {entered} setEntered = {setEntered}/>}></Route>
             <Route exact path='/login' element={<Login />}></Route>
             <Route exact path ='/register' element={<Register />}></Route>
        </Routes>
          
    </div>
    </Router>
  );
}

export default App;
