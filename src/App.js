import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Game from './pages/game';
import Contact from './pages/contact';
import 'bulma/css/bulma.min.css';
import background from "./assets/background.png";


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <section style={{backgroundImage: `url(${background}`, backgroundSize:"cover"}}></section>
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
 