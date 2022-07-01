import logo from './logo.svg';
import './App.css';
import {Header} from '../src/components/Header/header';
import {Content} from '../src/components/Content/content';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Play} from '../src/components/Play/play';
import {SignUp} from '../src/components/SignUp/sign-up';

function App() { 

  return (
    <Router>
    <div>
       <Header />
       <Routes>
          <Route exact path="/" element={<Content />} />
          <Route exact path="/play" element={<Play />} />
          <Route exact path="/play/sign-up" element = {<SignUp />} />
          
       </Routes>
      
    </div>
    </Router>
  );
}

export default App;
