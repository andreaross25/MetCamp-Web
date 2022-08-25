import logo from './logo.svg';
import './App.css';
import Button from './components/Button/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Game from './pages/game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MetCamp Andrea Daisy
        </p>
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/game' element={<Game/>} />
           </Routes>
        </BrowserRouter>
       <Button text="Cancelar" onClick={()=> alert('Me hicieron click')}/>
       <Button text="Guardar" onClick={()=> alert("Se guardaron los cambios")}/>
      </header>
    </div>
  );
}

export default App;
 