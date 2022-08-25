import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Game from './pages/game';
import Contact from './pages/contact'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/game' element={<Game/>} />
              <Route path='/contact' element={<Contact/>} />
           </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
 